// declaring DOMs variables
var item       = document.getElementsByClassName("item");
var container  = document.getElementById("icons");
var row_1      = document.getElementById("row-1");
var row_2      = document.getElementById("row-2");
var row_3      = document.getElementById("row-3");
var div        = document.createElement("div");
var timer      = document.getElementById("timer");
var rows       = [row_1, row_2, row_3];
var minsec     = document.getElementById("minsec");
var timerbelow = document.getElementById("timerbelow");
var minutes    = 1;
var seconds    = 0;
var excution;
var recursion;
var clockSound = new Audio('https://kevan.org/mp3s/pomodoro%20timer.mp3');
var alarmSound = new Audio('/sound/Alarm1.wav')

alarmSound.play();

//functions 

container.style.display = "flex";

timer.style.display = "none";

function home(){
    excution = false;
    seconds = 0;
    container.style.display = "flex";
    timer.style.display = "none";
    clockSound.pause();
    clockSound.currentTime = 0;
}

function clicked(min) {
    clearTimeout(recursion);
    excution = true;
    minutes = min;
    container.style.display = "none";
    timer.style.display = "flex";
    startTimer();
    clockSound.play();
}

function startTimer(){
    if(seconds < 10 && minutes > 0){ seconds = "0" + seconds}
    if(minutes != 0){
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
    if(clockSound.currentTime === 60 * 20){
        clockSound.currentTime = 1;
    }
    if (seconds == -1) {
        minutes--;
        seconds += 60;
    }
    if(seconds == 0 && minutes == 0){
        //run sound and make the background green
    }
    recursion = setTimeout(startTimer, 1000);
    if (excution === false){
        clearTimeout(recursion);
        seconds = 0;
    }
}