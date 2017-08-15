const chai = require('chai');
const expect = chai.expect
const { listAllGuests, listAllRooms, listAllBookings } = require('./database.js')

describe( 'Guests', function(){
  it('list all guests.', function(){
    return listAllGuests()
    .then(
      data => {
        let result = data.map(data => {
          return data
        })
        console.log(data)
      }
    )
  })
})
describe( 'Rooms', function(){
  it('list all rooms.', function(){
    return listAllRooms()
    .then( data => {
      console.log( '<3333333 stuff <3333333' ); 
    })
  })
  it('list only rooms with availability when --available option is provided.', function(){
    return listAllRooms()
    .then( data => {
      console.log( '<3333333 stuff <3333333' ); 
    })
  })
})
describe( 'Bookings', function(){
  it('list all upcoming room bookings (soonest check-in date first)).', function(){
    return listUpcomingBookings()
    .then( data => {
      console.log( '<3333333 stuff <3333333' ); 
    })
  })
  it('list bookings for one room with the soonest check-in date first when room argument is provided.', function(){
    return listUpcomingBookings()
    .then( data => {
      console.log( '<3333333 stuff <3333333' ); 
    })
  })
  it('list all upcoming room bookings (soonest check-in date first).', function(){
    return listUpcomingBookings()
    .then( data => {
      console.log( '<3333333 stuff <3333333' ); 
    })
  })
})