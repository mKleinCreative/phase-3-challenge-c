const chai = require('chai');
const expect = chai.expect
const { listAllGuests, listAllRooms, listAllAvailableRooms, listUpcomingBookings } = require('./database.js')

describe( 'Guests', function(){
  it('list all guests.', function(){
    expect(listAllGuests).to.be.a('function')
    return listAllGuests()
    .then( data => {
        expect(data[0]).to.eql([1, 'Aurthur Velti', 'avelti0@live.com'])
        expect(data[13]).to.eql([14, 'Averil Sawkin', 'asawkind@comsenz.com'])
        let result = data.map(data => {
          return [data]
        })
      }
    )
  })
})

describe( 'Rooms', function(){
  it('list all rooms.', function(){
    return listAllRooms()
    .then( data => {
      expect(data[0].length).to.equal(3)
    })
  })
  it('list only rooms with availability when --available option is provided.', function(){
    return listAllAvailableRooms( )
    .then( data => {
      data.forEach( data => {
        expect(data[2]).to.equal(true)
      })
    })
  })
})

describe.only( 'Bookings', function(){
  it('list all upcoming room bookings (soonest check-in date first)).', function(){
    return listUpcomingBookings()
    .then( data => {
      console.log( '---===data===---', data ); 
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