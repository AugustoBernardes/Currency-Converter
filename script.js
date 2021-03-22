
let valueDolarText = document.getElementById("valueInput")
let result = document.getElementById("result")

function convert(){
    let valueDolarNumber = parseFloat(valueDolarText.value)
    console.log(valueDolarNumber)
    // dollar price in 22/03/2021
    let valueReais = valueDolarNumber * 5.51
    let valueReaisDecimal = valueReais.toFixed(2)
    console.log(valueReaisDecimal)
    result.innerHTML = `$${valueDolarNumber} Dolars = R$${valueReaisDecimal}`
}
