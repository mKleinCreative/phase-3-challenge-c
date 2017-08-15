// 20: Clicking on the "Book" button for a room will open the "Booking" modal with the room info automatically inserted (room number and nightly rate)
// 20: Users can select a check-in date (using an HTML5 date input) and a number of nights
// 20: The "Total" in the "Booking" modal shows the total sum (formula: nightly rate multiplied by number of nights)
// 20: Whenever the number of nights changes, the total is updated automatically
// 20: Clicking on the "X" button in the "Booking" modal closes the modal


const modal = document.querySelector('.modal')
const modalInfo = document.querySelector('.modal-information')
const modalRoom = modalInfo.children
const modalRoomNumber = modalRoom[0].children[0]
const modalRate = modalRoom[0].children[1]
const totalNights = modalRoom[2].children[0]
const modalTotal = modalRoom[3]
const roomTable = document.querySelector('tbody')
const rooms = roomTable.querySelectorAll('tr')
// const roomElements = rooms.getElementsByTagName('td')
const bookRoomButton = document.querySelectorAll('button .book-room')
const closeButton = document.querySelector('.modal-close-button')



function populateModal( roomInfo ) {
  
  console.log( '---===modalRoom===---', modalRoom ); 
  console.log( '---===totalNights===---', totalNights.value );
  console.log( '---===modalTotal===---', modalTotal );  
  console.log( '---===totalNights===---', totalNights ); 
  modal.style.display = 'block'
  let currentRoomInfo = roomInfo.parentElement.parentElement.children
  console.log( '---===currentRoomInfo===---', currentRoomInfo ); 
  modalRoomNumber.textContent = "Room Number: " + currentRoomInfo[0].textContent
  modalRate.textContent = currentRoomInfo[2].textContent + " / night"
  modalTotal.textContent = "Total " + currentRoomInfo[2].textContent
  totalNights.addEventListener('change', () => {
    modalTotal.textContent = "Total $" + parseFloat(currentRoomInfo[2].textContent.replace("$", "")) * parseFloat(totalNights.value)
  })
}

roomTable.addEventListener('click', (event) => {
  if (event.target.tagName == "BUTTON") {
    populateModal(event.target)
  }
})


closeButton.addEventListener('click', () => {
  modal.style.display = 'none'
})

// console.log( '---===modalInfo===---', modalInfo ); 
// console.log( '---===modal===---', modal ); 
// console.log( '---===rooms===---', rooms ); 
// // console.log( '---===roomElements===---', roomElements );
// console.log( '---===bookRoomButton===---', bookRoomButton );  



bookRoomButton.forEach( element => element.addEventListener('click', populateModal ))

