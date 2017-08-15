const printGuestsToConsole = (data) => {
  console.log(`|---+-------------------------+----------------------------|`)
  console.log(`| ID|  Guest Name             | Email                      |`)
  console.log(`|---+-------------------------+----------------------------|`)
  formatData(data)
}

const printRoomsToConsole = (data) => {
  console.log(`|--------+----------+------------------+`)
  console.log(`| Room # | Capacity | Available        |`)
  console.log(`|--------+----------+------------------+`)
  formatData(data)
}

const printUpcomingBookingsToConsole = (data) => {
  console.log(`|--------+------------+----------+-----------|`)
  console.log(`| Room # | Guest Name | Check-In | Check Out |`)
  console.log(`|--------+------------+----------+-----------|`)
  formatData(data)
}

const formatData = (data) => {
  data.forEach( (section) => {
    let firstSection = String(Object.values(section)[0])
    let secondSection = String(Object.values(section)[1])
    let thirdSection = String(Object.values(section)[2])
    let spacePaddingForFirstSection = 30 - firstSection.length
    let spacePaddingForSecondSection = 30 - secondSection.length
    let spacePaddingForThirdSection = 30 - thirdSection.length
    console.log(`| ${firstSection} ${Array(spacePaddingForFirstSection).join(' ')} | ${secondSection} ${Array(spacePaddingForSecondSection).join(' ')} | ${thirdSection} ${Array(spacePaddingForThirdSection).join(' ')}|`)
  })
  console.log( '|-------------+------------------------|' ); 
}

module.exports = {
  printGuestsToConsole,
  printRoomsToConsole,
  printUpcomingBookingsToConsole
}