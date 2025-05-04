const name = document.querySelector('.name');
const email = document.querySelector('.email');
const btn = document.querySelector('.btn');

let userData = null

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (email.value === '' || name.value === '') {
        alert('заполните все поля!')
    }
    alert('Заявка отправлена')
})