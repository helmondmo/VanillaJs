const celsiusInput = document.querySelector(".celsius > input")
const farenheitInput = document.querySelector(".farenheit > input")
const kelvinInput = document.querySelector(".kelvin > input")


celsiusInput.addEventListener("input", celsiusToFarenheitAndKelvin)
farenheitInput.addEventListener("input", FarenheitToCelsiusAndKelvin)
kelvinInput.addEventListener("input", kelvinToFarenheitAndCelsius)


function round(num) {
    return  Math.floor(num * 100)/100
}

function celsiusToFarenheitAndKelvin(){
    const cTemp = parseFloat(celsiusInput.value)
    const fTemp = (cTemp*1.8) + 32
    const kTemp = cTemp + 273.15 
    farenheitInput.value = round(fTemp)
    kelvinInput.value =  round(kTemp)
}


function FarenheitToCelsiusAndKelvin(){
    const fTemp = parseFloat(farenheitInput.value)
    const cTemp = (fTemp - 32) * (5/9)
    const kTemp = (fTemp + 459.67) * (5/9)
    celsiusInput.value =  round(cTemp)
    kelvinInput.value =  round(kTemp)
}


function kelvinToFarenheitAndCelsius(){
    const kTemp = parseFloat(kelvinInput.value)
    const fTemp = 9/5 * (kTemp-273) + 32
    const cTemp = kTemp - 273.5
    farenheitInput.value =  round(fTemp)
    celsiusInput.value =  round(cTemp)
}

