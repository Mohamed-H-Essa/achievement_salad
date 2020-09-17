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
var plyButtom  = document.getElementById("ply");
var psButtom   = document.getElementById("ps");
var cnclButtom = document.getElementById("cncl");
var minutes    = 1;
var seconds    = 0;
var currentSession = 0;
var excution;
var recursion;
var clockSound = new Audio('https://kevan.org/mp3s/pomodoro%20timer.mp3');
var alarmSound = new Audio('./sound/alarm1.wav')
alarmSound.volume = 0.05;
cnclButtom.style.display = "none";

console.log(cnclButtom.style.display);

//functions 
function playPause(){
    if(cnclButtom.style.display == "none"){
        if(psButtom.style.display == "block"){
        clockSound.pause();
        excution = false;
        plyButtom.style.display = "block";
        psButtom.style.display = "none";
        clearTimeout(recursion);
        }else{
        clockSound.play();
        excution = true;
        plyButtom.style.display = "none";
        psButtom.style.display = "block";
        startTimer();
        }
    }else{return;}
}



container.style.display = "flex";

timer.style.display = "none";

function home(){
    excution = false;
    seconds = 0;
    container.style.display = "flex";
    timer.style.display = "none";
    clockSound.pause();
    clockSound.currentTime = 0;
    alarmSound.pause();
}

function clicked(min) {
    currentSession = min;
    seconds = 0;
    psButtom.style.display = "block";
    plyButtom.style.display = "none";
    cnclButtom.style.display = "none";
    clearTimeout(recursion);
    excution = true;
    minutes = min;
    container.style.display = "none";
    timer.style.display = "flex";
    startTimer();
    clockSound.play();
}


//start timer and play sound(clock and alarm)
function startTimer(){
    minsec.style.color = "rgb(74, 14, 172)";
    if(seconds < 10 && minutes > 0){ seconds = "0" + seconds}
    if(minutes != 0){
        minsec.innerHTML = minutes + ":" + seconds;
    }else{
        minsec.innerHTML = seconds;
    }
    seconds--;
    if(minutes <= 0 && seconds <= 0){
        //run an alarm sound and make the background green + making a red 0
        setTimeout( () => {
            minsec.innerHTML = "0";
            clockSound.pause();
            alarmSound.play();
            plyButtom.style.display = "none";
            psButtom.style.display = "none";
            cnclButtom.style.display = "block";
        }, 1000);
        setTimeout(()=> {switch(currentSession){
            case 5:
                console.log("5 min sessoin has just ended");
                break;
            case 10:
                console.log("10 min session has just ended");
                break;
            case 15:
                console.log("15 min session has just ended up");
                break;
            case 20:
                console.log("20 min session has just ended");
                break;
            case 25:
                console.log("25 min session has just ended");
                break;
            case 30:
                console.log("30");
                break;
            case 40:
                console.log("40")
                break;
            case 50:
                console.log("50");
                break;
            case 60:
                console.log("60");
                break;
            default:
                console.log("there is a problem, you shouldn't see this message")
        }}, 1020)
        minsec.style.color = "red";
       
        return;
    }
    if(clockSound.currentTime === 60 * 20){
        clockSound.currentTime = 1;
    }
    if (seconds == -1) {
        minutes--;
        seconds += 60;
    }
    if (excution === true){
        recursion = setTimeout(startTimer, 1000);
    }else{
        clearTimeout(recursion);
    }
}


//spacebar listener to playPause and disable alarm sound...
document.body.onkeyup = (e) =>{
    if(e.keyCode == 32){
        if(cnclButtom.style.display == "none"){
            debugger;
            playPause();
        }else{
            alarmSound.pause();
        }
    }
}