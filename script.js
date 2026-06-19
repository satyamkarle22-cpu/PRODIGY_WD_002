let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

function updateDisplay(){

let h = String(hours).padStart(2,'0');
let m = String(minutes).padStart(2,'0');
let s = String(seconds).padStart(2,'0');

display.textContent = `${h}:${m}:${s}`;
}

document.getElementById("start").addEventListener("click",()=>{

if(!running){

running = true;

timer = setInterval(()=>{

seconds++;

if(seconds === 60){
seconds = 0;
minutes++;
}

if(minutes === 60){
minutes = 0;
hours++;
}

updateDisplay();

},1000);

}

});

document.getElementById("pause").addEventListener("click",()=>{

clearInterval(timer);

running = false;

});

document.getElementById("reset").addEventListener("click",()=>{

clearInterval(timer);

running = false;

seconds = 0;
minutes = 0;
hours = 0;

updateDisplay();

lapList.innerHTML = "";

});

document.getElementById("lap").addEventListener("click",()=>{

if(running){

const lap = document.createElement("li");

lap.textContent =
`Lap ${lapList.children.length + 1}: ${display.textContent}`;

lapList.appendChild(lap);

}

});

updateDisplay();
