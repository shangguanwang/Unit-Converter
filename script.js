
//Grab elements from HTML
const userInput = document.getElementById("user-input")
const errorMessage = document.getElementById("error-message")
const btn = document.getElementById("convert-btn")

const lengthPlaceholder = document.getElementById("length-placeholder")
const volumePlaceholder = document.getElementById("volume-placeholder")
const massPlaceholder = document.getElementById("mass-placeholder")


//Add event listener to button
btn.addEventListener("click", convertAll)

// If input is empty, display error message
userInput.addEventListener("blur", checkInput)
function checkInput(){
    userInput.value.trim()===""? errorMessage.style.display = "block": errorMessage.style.display = "none";
}

function convertAll(event){
    event.preventDefault();
    checkInput(); //make sure the input is not empty
    convertMeterFeet();
    convertLiterGallon();
    convertKiloPound()
}

function convertMeterFeet(){
    let feet = (userInput.value * 3.2808).toFixed(3)
    let meter = (userInput.value / 3.2808).toFixed(3)
    lengthPlaceholder.innerHTML = `${userInput.value} meters = ${feet} feet | ${userInput.value} feet = ${meter} meters`
}

function convertLiterGallon(){
    let gallon = (userInput.value * 0.264172).toFixed(3)
    let liter = (userInput.value / 0.264172).toFixed(3)
    volumePlaceholder.innerHTML = `${userInput.value} liters = ${gallon} gallons | ${userInput.value} gallons = ${liter} liters`
}

function convertKiloPound(){
    let pound = (userInput.value * 2.20462).toFixed(3)
    let kilo = (userInput.value / 2.20462).toFixed(3)
    massPlaceholder.innerHTML = `${userInput.value} kilos = ${pound} pounds | ${userInput.value} pounds = ${kilo} kilos`
}