

// declaring DOMs
var item = document.getElementsByClassName("item");
var container = document.getElementById("icons");
var row_1 = document.getElementById("row-1");
var row_2 = document.getElementById("row-2");
var row_3 = document.getElementById("row-3");
var div = document.createElement("div");
var timer = document.getElementById("timer");
var rows = [row_1, row_2, row_3];
var minsec = document.getElementById("minsec");
var timerbelow = document.getElementById("timerbelow");
var excution;
var minutes = 1;
var seconds = 0;
var recursion;
//functions 

container.style.display = "flex";

timer.style.display = "none";

function home(){
    excution = false;
    container.style.display = "flex";
    timer.style.display = "none";
}

function clicked(min) {
    excution = true;
    minutes = min;
    container.style.display = "none";
    timer.style.display = "flex";
    startTimer();
}

console.log(container.style)

function startTimer(){
    if(seconds < 10 && minutes > 0){ seconds = "0" + seconds}
    if(minutes != 0) {
        minsec.innerHTML = minutes + ":" + seconds;
    }else{
        minsec.innerHTML = seconds;
    }
    seconds--;
    if(minutes <= 0 && seconds <= 0){
        setTimeout(    () => {minsec.innerHTML = "0"}, 1000);
        minsec.style.color = "#ff304f";
        return;
    }
    if (seconds == -1) {
        minutes--;
        seconds += 60;
    }
    recursion = setTimeout(startTimer, 1000);
    if (excution === false){
        clearTimeout(recursion);
        seconds = 0;
    }
}


function start_timer() {
    remove_icons(rows);
}

function remove_icons(arr){
    arr.forEach(element => {
        container.removeChild(element);
    });
}