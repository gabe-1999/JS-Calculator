const keys = document.querySelectorAll(".key");
const screen  = document.querySelector(".screen");
const text = screen.querySelector('.scr-text');
const values = {}
let isLocked = false;
let operation = "";
let result = "";


function addValueMappings() {
    keys.forEach((key) => {
        let value = key.querySelector("p").innerHTML;
        values[key.id] = value;
    })
}

addValueMappings();


keys.forEach((key) => {
    key.addEventListener("click" , handleClick);
});

function handleClick() {
    let result;
    if (this.id == "key-15") {
        result = calculate(operation);
        console.log(result);
        showDisplay(result, (parseInt(result)) ? false : true);
    }else if(this.id == "key-13") {
        clear();
    } else {
        text.innerHTML += values[this.id];
        operation += values[this.id];
        console.log(screen.offsetWidth, screen.offsetWidth);
    }
    
}

function calculate(op) {
    try {
        return eval(operation); 
    } catch (error) {
        return "Invalid Expression!"; 
    }
}

function showDisplay(value, isError = false) {
    if (isError) {
        text.innerHTML = value;
        text.style.color = "crimson";
    } else {
        text.innerHTML = value;
    }
}

function clear() {
    text.innerHTML = "";
    text.style.color = "black"
    operation = "";
}