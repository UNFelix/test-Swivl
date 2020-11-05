const dropdown = document.getElementsByClassName('dropdown')[0]
dropdown.addEventListener('click', toggleDropdown)

function toggleDropdown(e) {
  dropdown.classList.toggle("open")
}