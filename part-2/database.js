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
  )


const listAllRooms = () =>
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
    `
  )

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
  )

module.exports = {
  listAllGuests,
  listAllRooms,
  listUpcomingBookings
}