const printGuestsToConsole = ( data ) => {
  console.log(`|---+-------------------------+----------------------------|`)
  console.log(`| ID|  Guest Name             | Email                      |`)
  console.log(`|---+-------------------------+----------------------------|`)
  formatData( data )
}

const printRoomsToConsole = ( data ) => {
  console.log(`|--------+----------------+------------------+`)
  console.log(`| Room # | Capacity       | Available        |`)
  console.log(`|--------+----------------+------------------+`)
  formatData( data )
}

const printUpcomingBookingsToConsole = ( data ) => {
  console.log(`|--------+------------------------+--------------+--------------|`)
  console.log(`| Room # | Guest Name             | Check-In     | Check Out    |`)
  console.log(`|--------+------------------------+--------------+--------------|`)
  formatData( data )
}

const formatData = (data) => {
  data.forEach((section) => {
    let firstSection = section[0]
    let secondSection = section[1]
    let thirdSection = section[2]
    let fourthSection = section[3]
    let spacePaddingFirstSection = Math.max(4 - firstSection.length) 
    let spacePaddingSecondSection = Math.max(20 - secondSection.length)
    let spacePaddingThirdSection = Math.max(10 - thirdSection.length)
    let spacePaddingFourthSection = null
    
    if ( fourthSection ){
      spacePaddingFourthSection = Math.max(10 - fourthSection.length)
    }

    const fillSpaces = numberOfSpaces => {
      let spaces = ''
      for (let x=0; x<=numberOfSpaces; x++) {
        spaces += ' '
      }
      return spaces
    }
    let bigString = `| ${firstSection} ${fillSpaces(spacePaddingFirstSection)} |`
    bigString += ` ${secondSection} ${fillSpaces(spacePaddingSecondSection)} |`
    bigString += ` ${thirdSection} ${fillSpaces(spacePaddingThirdSection)} |`
    if ( fourthSection ) {
      bigString += ` ${fourthSection}  ${fillSpaces(spacePaddingFourthSection)}|`
    }
    console.log( bigString ); 
  })
  console.log(`|---------------------------------------------------------------|`)
}

module.exports = {
  printGuestsToConsole,
  printRoomsToConsole,
  printUpcomingBookingsToConsole
}