let daySelector = document.querySelector('.days');
let hourSelector = document.querySelector('.hours');
let minuteSelector = document.querySelector('.minutes');
let secondSelector = document.querySelector('.seconds');

addToCountdownResult = () => {
    let currentDate = new Date();
    let currentTime = currentDate.getTime();
    let endDate = new Date(2021, 02, 19, 17, 0, 0).getTime();
    let remainingSeconds = endDate - currentTime;
    let timeRemaining = ((remainingSeconds / 3600) / 24) / 1000; // time remaining in percentage of days

    daysRemaining = Math.floor(timeRemaining);
    hoursRemaining = Math.floor(24 * (timeRemaining % 1));
    minutesRemaining = Math.floor((24 * timeRemaining % 1) * 60);
    secondsRemaining = Math.round(60 * (((24 * (timeRemaining % 1)) * 60) % 1));

    if(hoursRemaining < 1) {
        hoursRemaining = 0;
    }
    if(hoursRemaining < 10){
        hoursRemaining = '0'+ hoursRemaining; 
    }
    if(minutesRemaining < 10){
        minutesRemaining = '0' + minutesRemaining;
    }
    if(secondsRemaining < 10){
        secondsRemaining = '0' + secondsRemaining;
    }

    daySelector.innerHTML = daysRemaining;
    hourSelector.innerHTML = hoursRemaining
    minuteSelector.innerHTML = minutesRemaining
    secondSelector.innerHTML = secondsRemaining
}
addToCountdownResult();
setInterval(addToCountdownResult, 1000);
