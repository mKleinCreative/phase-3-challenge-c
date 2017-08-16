const { listAllGuests,
        listAllRooms,
        listUpcomingBookings } = require('./database')

const { printGuestsToConsole,
        printRoomsToConsole,
        printUpcomingBookingsToConsole } = require('./format')

const input = process.argv[2]
const inputOptions = process.argv[3]

if ( input === "guests" ) {
  listAllGuests( inputOptions )
    .then( data => {
      // console.log( '---===data[0]===---', data.name ); 
      printGuestsToConsole(data)
      process.exit(0)
    })
} else if ( input === "rooms" ) {
  listAllRooms( inputOptions )
    .then( data => {
      // console.log( '<3333333 data in function <3333333', data ); 
      printRoomsToConsole(data)
      process.exit(0)
    })
} else if ( input === "bookings" ) {
  listUpcomingBookings( inputOptions )
    .then( data => {
      printUpcomingBookingsToConsole(data)
      process.exit(0)
    })
} else {
  console.log( '<3333333 please give a valid command <3333333' ); 
}