const getBtn = document.getElementById('getBtn')
const output = document.getElementById('output')
fetch('https://api.chucknorris.io/jokes/random')
.then((res) => res.json())
.then((data) => output.innerHTML = data.value)

getBtn.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((data) => output.innerHTML = data.value)
})