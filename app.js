const dark = document.querySelector('.dark')
const night = document.querySelector('.night')
const light = document.querySelector('.light')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const activeListItem = document.querySelector('.list-item.active')

dark.addEventListener('click', () => {
    container.className = "container"
    sidebar.className = 'sidebar'
    activeListItem.className = 'list-item active'
})

night.addEventListener('click', () => {
    container.className = "container night"
    sidebar.className = 'sidebar night'
    activeListItem.className = 'list-item active night'
})

light.addEventListener('click', () => {
    container.className = "container light"
    sidebar.className = 'sidebar light'
    activeListItem.className = 'list-item active light'
})