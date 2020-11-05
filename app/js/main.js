const dropdown = document.getElementsByClassName('dropdown')[0]
dropdown.addEventListener('click', toggleDropdown)

function toggleDropdown(e) {
  dropdown.classList.toggle("open")
}

const toggler = document.getElementsByClassName('toggler')[0]
toggler.onclick = () => toggler.classList.toggle('on')