const printGuestsToConsole = ( data ) => {
  console.log(`|---+-------------------------+----------------------------|`)
  console.log(`| ID|  Guest Name             | Email                      |`)
  console.log(`|---+-------------------------+----------------------------|`)
  formatData( data )
}

const printRoomsToConsole = ( data ) => {
  console.log(`|--------+----------+------------------+`)
  console.log(`| Room # | Capacity | Available        |`)
  console.log(`|--------+----------+------------------+`)
  formatData( data )
}

const printUpcomingBookingsToConsole = ( data ) => {
  console.log(`|--------+------------+----------+-----------|`)
  console.log(`| Room # | Guest Name | Check-In | Check Out |`)
  console.log(`|--------+------------+----------+-----------|`)
  formatData( data )
}

const formatData = (data) => {
  data.forEach( (section) => {
    let firstSection = String(Object.values(section)[0])
    let secondSection = String(Object.values(section)[1])
    let thirdSection = String(Object.values(section)[2])
    let spacePaddingForFirstSection = Math.max( firstSection - firstSection.length)
    let spacePaddingForSecondSection = Math.max( secondSection - secondSection.length)
    let spacePaddingForThirdSection = Math.max( thirdSection - thirdSection.length)
    console.log(`| ${firstSection} ${Array(spacePaddingForFirstSection).join(' ')} | ${secondSection} ${Array(spacePaddingForSecondSection).join(' ')} | ${thirdSection} ${Array(spacePaddingForThirdSection).join(' ')}|`)
  })
  console.log( '|-------------+------------------------|' ); 
}

module.exports = {
  printGuestsToConsole,
  printRoomsToConsole,
  printUpcomingBookingsToConsole
}