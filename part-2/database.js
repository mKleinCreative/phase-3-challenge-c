const pgp = require('pg-promise')()
const connectionString = `pg://${process.env.USER}@localhost:5432/hotel_db`
const db = pgp(connectionString)

const listAllGuests = () =>
  db.many(
    `
    SELECT
      *
    FROM
      guests;
    `
  ).then( (data) => {
    console.log( '---===JSON.stringify(data)===---', String(JSON.stringify(data)) ); 
    return String(data)
    // return JSON.stringify(data)
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
    .then( (data) => {
      return JSON.stringify(data)
    })
    .catch( (error) => {
      console.log( '---===room error===---', error ); 
    })

const listUpcomingBookings = () =>
  db.many(
    `
      SELECT
        rooms.number, guests.name, check_in, check_out
      FROM
        rooms, bookings, guests
      WHERE
        bookings.check_out > current_date
      GROUP BY
        rooms.number, guests.name, bookings.check_in, bookings.check_out
      ORDER BY
        check_in
      ASC;
    `
  ).then( data => {
    console.log( '---===data from bookings===---', data ); 
    return data
  })
  .catch( error => {
    console.log( '---===booking error===---', error ); 
  })


module.exports = {
  listAllGuests,
  listAllRooms,
  listUpcomingBookings
}