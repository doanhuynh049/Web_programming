// javascript
let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count++;
    console.log("Button is clicked");
    countEl.innerText = count;
}
function save(){
    console.log(count);
}
