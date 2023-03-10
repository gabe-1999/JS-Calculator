const numKeys = document.querySelectorAll(".key");
const screen  = document.querySelector(".screen");
const text = screen.querySelector('.scr-text');
const maxChar = 16;
const valueMap = {}
const errorMessage = "Invalid Expression!";
let operation = "";
let result = "";


function addValueMappings() {
    numKeys.forEach((key) => {
        let value = key.querySelector("p").innerHTML;
        valueMap[key.id] = (value == "X") ? "*" : value;
    })
}

addValueMappings();


numKeys.forEach((key) => {
    key.addEventListener("click" , handleClick);
});

function handleClick() {
    if (this.id == "key-15") {
        calculate();
    }else if(this.id == "key-13") {
        clear();
    } else {
        showDisplay(this.id);
    }
    
}

function calculate() {
    try {
        result = eval(operation).toString();
        showResult();
    } catch (error) {
        showDisplay(operation, (parseInt(operation)) ? false : true);
    }
}

function showDisplay(value, isError = false) {
    if (isError) {
        text.innerHTML = value;
        text.style.color = "crimson";
    } else {
        operation += valueMap[value];
        let content = operation.length > maxChar ? trimString(operation) : operation
        text.innerHTML = (text.innerHTML == errorMessage) ? errorMessage : content;
    }
}

function trimString(str) {
    return str.substring(str.length - 15, str.length) + "..";
}


function showResult() {
    text.innerHTML = result.length > maxChar  ? trimString(result) : result;
}

function clear() {
    text.innerHTML = "";
    text.style.color = "black"
    operation = "";
}