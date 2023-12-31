let day = document.querySelector('.days');
let hour = document.querySelector('.hours');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.seconds');

function setCountdown() {

// Set countdown date
let countdownDate = new Date('Feb 10, 2024 00:00:01').getTime();

// Update countdown every second
let updateCount = setInterval(function(){

    // Get today's date and time
    let todayDate = new Date().getTime();

    // Get distance between now and countdown date
    let distance = countdownDate - todayDate;

    let days = Math.floor(distance / (1000 * 60 * 60 *24));

    let hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 *60));

    let minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));

    let seconds = Math.floor(distance % (1000 * 60) / 1000);

    // Display values in html elements
    if(days>=10){
    day.textContent = days;
    }else{ 
        day.textContent = '0'+days;
    }
    if(hours>=10){
    hour.textContent = hours;
    }else{
        hour.textContent='0'+hours;
    }
    if(minutes>=10){
        minute.textContent = minutes;
    }else{
        minute.textContent = '0'+minutes;
    }
    if(seconds>=10){
        second.textContent = seconds;
    }else{
        second.textContent = '0'+seconds;
    }
    

    // if countdown expires
    if(distance < 0){
        clearInterval(updateCount);
        document.querySelector(".container").innerHTML = '<h1>EXPIRED</h1>'
    }
}, 1000)
}

setCountdown()