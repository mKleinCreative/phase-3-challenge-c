const modal = document.querySelector('.modal')
const modalInfo = document.querySelector('.modal-information')
const modalRoom = modalInfo.children
const modalRoomNumber = modalRoom[0].children[0]
const modalRate = modalRoom[0].children[1]
const totalNights = modalRoom[2].children[0]
const modalTotal = modalRoom[3]
const roomTable = document.querySelector('tbody')
const rooms = roomTable.querySelectorAll('tr')
const bookRoomButton = document.querySelectorAll('button .book-room')
const closeButton = document.querySelector('.modal-close-button')

function populateModal( roomInfo ) {
  modal.style.display = 'block'
  let currentRoomInfo = roomInfo.parentElement.parentElement.children
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
  totalNights.value = 1
})

bookRoomButton.forEach( element => element.addEventListener('click', populateModal ))
