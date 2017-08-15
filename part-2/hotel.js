const { listAllGuests,
        listAllRooms,
        listUpcomingBookings } = require('./database.js')

const { printGuestsToConsole,
        printRoomsToConsole,
        printUpcomingBookingsToConsole } = require('./format.js')

const input = process.argv[2]
const inputOptions = process.argv[3]

if ( input === 'guests' ) {
  listAllGuests()
    .then( (results) => {
      printGuestsToConsole(results)
      process.exit(0)
    })
} else if ( input === 'rooms' ) {
  listAllRooms()
    .then( (results) => {
      printRoomsToConsole(results)
      process.exit(0)
    })
} else if ( input === 'bookings' ) {
  listUpcomingBookings()
    .then( (results) => {
      printUpcomingBookingsToConsole(results)
      process.exit(0)
    })
} else {
  console.log( '<3333333 please give a valid command <3333333' ); 
}