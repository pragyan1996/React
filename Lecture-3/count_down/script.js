//Buttons
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");

//input elements
const hrInput = document.getElementById('hr');
const minInput = document.getElementById('min');
const secInput = document.getElementById('sec');

//History
let counterId;
let saveTimeLeft;

//Event listeners:
startBtn.addEventListener("click",(e)=>{
    //1.Take inputs
    let hour = parseInt(getValidInput(hrInput.value));
    let minute = parseInt(getValidInput(minInput.value));
    let second = parseInt(getValidInput(secInput.value));

    console.log(hour, minute, second);

    if(!validateInputTimer(hour,minute,second)){
        return;
    }

    //transform inputs
    // const {
    //     transformedHrs,
    //     transformedMins,
    //     transformedSecs
    // } = transformInputs(hour, minute, second);

    let countDownTime = hour*3600 + minute*60 + second;
    timer(countDownTime);
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';


});

pauseBtn.addEventListener("click",(e)=>{
    //Pause the process.
    clearInterval(counterId);

    //No change in the UI
    //Visiility of buttons
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'block';
    
});

continueBtn.addEventListener("click",(e)=>{
    //Adding the events for continue button.
    timer(saveTimeLeft);
    pauseBtn.style.display = 'block';
    continueBtn.style.display = 'none';

    

});

resetBtn.addEventListener("click",(e)=>{
    hrInput.value = "";
    minInput.value = "";
    secInput.value = "";

    saveTimeLeft = 0;
    startBtn.style.display = 'block';   
    continueBtn.style.display = 'none';
    pauseBtn.style.display = 'none';
    clearInterval(counterId);

});


function getValidInput(val){
    return !val ? 0 : val;
}

function transformInputs(hour, minute, second){
    
}

function validateInputTimer(hour, min, sec){
    if(hour < 0 || min < 0 || sec < 0){
        alert('negative values are not allowed.')
        return false;
    }

    if(hour > 24){
        alert('Hour is greater then 24, is not a valid hour.')
        return false;
    }

    if(min > 60 || sec > 60){
        alert('invalid min or second inputs.')
        return false;
    }
    return true;
}

function timer(countDownTime){
    counterId = setInterval(()=>{
        if(countDownTime == 0) return;
        countDownTime--;
        saveTimeLeft = countDownTime;
        console.log("timer : ",countDownTime);
        //update UI every second
        updateUIEverySecond(countDownTime);
    },1000)
}

function updateUIEverySecond(time){
    let hour = Math.floor(time/3600);
    let min = Math.floor((time%3600)/60);
    let sec = Math.floor(time%60);
    hrInput.value = hour<10 ? `0${hour}`: hour;
    minInput.value = min< 10 ? `0${min}`: min;
    secInput.value = sec<10?`0${sec}`: sec;
}

