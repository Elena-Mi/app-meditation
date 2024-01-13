
const button = document.querySelector("#myButton");
button.addEventListener('click', function () {
    document.querySelector('##player').play();
    document.querySelector('#myVideo').play();

})

const timer = 5;
let time = timer * 60;

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    if(seconds < 10) {
        seconds = '0' + seconds
    }
    else {
        seconds = seconds;
    }
    countdown.innerHTML = `${minutes} : ${seconds}`;
    time--;
    if (time < 0) {
        stopTimer();
        time = 0;
    }
    else {
        time = time;
    }
 
}
let timerId = setInterval(calculateTime, 1000);

function stopTimer() {
    clearInterval(timerId);
   }

