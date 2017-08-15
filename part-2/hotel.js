const {
    listAllGuests,
    listAllRooms,
    listUpcomingBookings 
  } = require('./database.js')
const input = process.argv[2]
const inputOptions = process.argv[3]

if ( input === 'guests' ){
  listAllGuests()
    .then( results => {
      console.log(results)
      process.exit(0)
    })
} else if ( input === 'rooms' ) {
  listAllRooms()
    .then( results => {
      console.log(results)
      process.exit(0)
    })
} else if ( input === 'bookings' ) {
  listUpcomingBookings()
    .then( results => {
      console.log(results)
      process.exit(0)
    })
} else {
  console.log( '<3333333 please enter a valid command <3333333' ); 
}