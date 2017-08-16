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
  // console.log( '---===data===---', data ); 
  formatData( data )
}

const printUpcomingBookingsToConsole = ( data ) => {
  console.log(`|--------+------------+----------+-----------|`)
  console.log(`| Room # | Guest Name | Check-In | Check Out |`)
  console.log(`|--------+------------+----------+-----------|`)
  formatData( data )
}

const formatData = (data) => {
  // console.log( '---===data===---', data ); 
  data.forEach((section) => {
    let firstSection = String(Object.values(section)[0])
    let secondSection = String(Object.values(section)[1])
    let thirdSection = String(Object.values(section)[2])
    let fourthSection = String(Object.values(section)[3])
    let spacePaddingFirstSection = Math.max(4 - firstSection.length) 
    let spacePaddingSecondSection = Math.max(20 - secondSection.length)
    let spacePaddingThirdSection = Math.max(10 - thirdSection.length)
    let spacePaddingFourthSection = Math.max(10 - fourthSection.length)
    console.log(`| ${firstSection} ${Array(spacePaddingFirstSection).join(" ")} |  ${secondSection} ${Array(spacePaddingSecondSection).join(" ")}| ${thirdSection} ${Array(spacePaddingThirdSection).join(" ")}| ${fourthSection} ${Array(spacePaddingFourthSection).join(" ")}|`)
  })
  console.log(`|------------------+--------------------------------------------|`)
}
// const formatData = (data) => {
//   data.forEach( (section) => {
//     console.log( '---===data===---', data );
//     
//     let firstSection = String(Object.values(section)[0])
//     console.log( '---===firstSection===---', firstSection ); 
//     // let secondSection = String(section.capacity)
//     // let thirdSection = String(section.available)
//     // let spacePaddingForFirstSection = Math.max( firstSection - firstSection.length)
//     // let spacePaddingForSecondSection = Math.max( secondSection - secondSection.length)
//     // let spacePaddingForThirdSection = Math.max( thirdSection - thirdSection.length)
//     console.log(`| ${firstSection} ${Array(spacePaddingForFirstSection).join(' ')} | ${secondSection} ${Array(spacePaddingForSecondSection).join(' ')} | ${thirdSection} ${Array(spacePaddingForThirdSection).join(' ')}|`)
//   })
//   console.log( '|-------------+------------------------|' ); 
// }

module.exports = {
  printGuestsToConsole,
  printRoomsToConsole,
  printUpcomingBookingsToConsole
}