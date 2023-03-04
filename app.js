const keys = document.querySelectorAll(".key");
const scrText = document.getElementById("scr-text");
const values = {}

function addValueMappings() {
    keys.forEach((key) => {
        let value = key.querySelector("p").innerHTML;
        values[key.id] = value;
    })
}

addValueMappings();
console.log(values);

keys.forEach((key) => {
    key.addEventListener("click" , handleClick);
});

function handleClick() {
    scrText.innerHTML += values[this.id];
    if (this.id == "key-13") scrText.innerHTML = "";
}