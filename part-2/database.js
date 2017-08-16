const pgp = require('pg-promise')()
const connectionString = `pg://${process.env.USER}@localhost:5432/hotel_db`
const db = pgp(connectionString)

const listAllGuests = () => db.any(`SELECT * FROM guests`)
  .then( (data) => {
    const guests = data.map( guestsData => {
      return [guestsData.id, guestsData.name, guestsData.email]
    })
    return guests
  })
  .catch( error => {
    console.log( '---===guest error===---', error ); 
  })


const listAllRooms = ( available ) =>
  db.many(
    `
      SELECT 
        rooms.number, rooms.capacity,
      CASE WHEN
        bookings.check_in < current_date
      AND
        current_date < bookings.check_out
      THEN
        FALSE
      ELSE
        TRUE
      END AS
        Available
      FROM
        bookings
      JOIN
        rooms
      ON
        rooms.id=bookings.room_id;
    `)
    .then( data => {
      // console.log( '---===data here===---', data ); 
      const rooms = data.map( roomData => {
        return [roomData.number, roomData.capacity, roomData.available]
      })
      return rooms
    })
    .catch( (error) => {
      console.log( '---===room error===---', error ); 
    })

const listAllAvailableRooms = () => 
  db.many(
    `
      SELECT * FROM (SELECT 
        rooms.number, rooms.capacity,
      CASE WHEN
        bookings.check_in < current_date
      AND
        current_date < bookings.check_out
      THEN
        FALSE
      ELSE
        TRUE
      END AS
        Available
      FROM
        bookings
      JOIN
        rooms
      ON
        rooms.id=bookings.room_id) AS room
     WHERE room.available=true
    `
  ).then( data => {
    const rooms = data.map( roomData => {
      return [roomData.number, roomData.capacity, roomData.available]
    })
    return rooms
  })
  .catch( error => {
    console.log( '---===room available error===---', error ); 
  })

const listUpcomingBookings = (roomNumber) => {
  let sqlString = null;
  if (roomNumber) {
    sqlString = `
      SELECT
        rooms.number, 
        guests.name, 
        TO_CHAR(check_in, 'YYYY-MM-DD') 
      AS 
        check_in, 
        TO_CHAR(check_out, 'YYYY-MM-DD') 
      AS 
        check_out
      FROM
        bookings
      JOIN
        rooms ON bookings.room_id=rooms.id
      JOIN
        guests ON bookings.guest_id=guests.id
      WHERE
        bookings.check_out > current_date
      AND
        rooms.number='${roomNumber}'
      GROUP BY
        rooms.number, guests.name, bookings.check_in, bookings.check_out
      ORDER BY
        check_in
      ASC;
    `
  } else {
    sqlString = ` 
      SELECT 
        rooms.number, 
        guests.name, 
        TO_CHAR(check_in, 'YYYY-MM-DD') 
      AS 
        check_in, 
        TO_CHAR(check_out, 'YYYY-MM-DD') 
      AS 
        check_out
      FROM 
        bookings 
      JOIN
      	rooms ON bookings.room_id=rooms.id
      JOIN
      	guests ON bookings.guest_id=guests.id
      WHERE 
        bookings.check_in > CURRENT_DATE
      GROUP BY 
        rooms.number, guests.name, bookings.check_in, bookings.check_out
      ORDER BY 
        check_in ASC
    ; 
    `
  }
  return Promise.resolve(
    db.any( sqlString ).then( data => {
      const bookings = data.map( bookingData => {
        return [bookingData.number, bookingData.name, bookingData.check_in, bookingData.check_out]
      })
      return bookings
    })
    .catch( error => {
      console.log( '---===booking error===---', error ); 
    })
  )
}

module.exports = {
  listAllGuests,
  listAllRooms,
  listAllAvailableRooms,
  listUpcomingBookings
}