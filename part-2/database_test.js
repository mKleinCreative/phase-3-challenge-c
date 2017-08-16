const chai = require('chai');
const expect = chai.expect
const { listAllGuests, listAllRooms, listAllBookings } = require('./database.js')

describe( 'Guests', function(){
  it('list all guests.', function(){
    
    expect(listAllGuests).to.be.a('function')
    
    return listAllGuests()
    .then(
      data => {
        expect(data[0].hasOwnProperty('id')).to.be.true
        let result = data.map(data => {
          return [data]
        })
        console.log(data)
      }
    )
  })
})
describe.only( 'Rooms', function(){
  it('list all rooms.', function(){
    return listAllRooms()
    .then( data => {
      console.log( data ); 
      expect(data[0].length).to.equal(3)
    })
  })
  it('list only rooms with availability when --available option is provided.', function(){
    return listAllRooms( --available )
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