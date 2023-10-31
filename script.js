const konwertBtn = document.querySelector('.conv');
const resBtn = document.querySelector('.reset');
const changesBtn = document.querySelector('.change');
const input = document.querySelector('#converter');
const result = document.querySelector('.result');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit
let celsius



const changeFC = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F' 
        two.textContent = '°C'
        input.textContent = ''
    } else {
        one.textContent = '°C' 
        two.textContent = '°F'
        input.textContent = ''
    }
    
}

const fahrToCel = () => {
    fahrenheit = input.value * 1.8 + 32;
    result.textContent = `${input.value} °C to ${fahrenheit.toFixed(1)}°F`
    input.value = ''
}

const celToFah = () => {
    celsius = (input.value -32 ) / 1.8;
    result.textContent = `${input.value} °F to ${celsius.toFixed(1)}°C`
    input.value = ''
}


const conversion = () => {
    if (input.value !== '') {
        if (one.textContent === '°C') {
            fahrToCel()
        } else {
            celToFah()
        }
    } else {
        input.textContent = 'Musisz podać wartość!'
    }
    
}

const clear = () => {
        input.value = ''
        result.textContent = ''
}


changesBtn.addEventListener('click', changeFC)

konwertBtn.addEventListener('click', conversion)

resBtn.addEventListener('click', clear)

