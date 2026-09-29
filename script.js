const Days = document.getElementById('Days');
const Hours = document.getElementById('Hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');

const targetDate = new Date('7 October 2026 00:00:00').getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance<0)
    {
        Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);