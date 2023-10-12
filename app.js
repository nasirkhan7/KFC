let icon = document.querySelector('.bi-list')
let sidebar = document.querySelector('.sidebar')
let overlay = document.querySelector('.overlay')

overlay.addEventListener('click', () => {
    sidebar.style.transform = 'translate(-100%)'
    overlay.style.transform = 'translate(-100%)'

})


icon.addEventListener('click', () => {
    sidebar.style.transform = 'translate(0)'
    overlay.style.transform = 'translate(0)'
})