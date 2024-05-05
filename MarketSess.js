function openSession(sessionStatus, timeStatus, sessionBox) {
    sessionStatus.innerText = "opened"
    timeStatus.innerText = "closes in"
    sessionBox.style.background = "linear-gradient(to top, rgb(95, 94, 94), green)"
}
function closeSession(sessionStatus, timeStatus, sessionBox) {
    sessionStatus.innerText = "closed"
    timeStatus.innerText = "opens in"
    sessionBox.style.background = "linear-gradient(to top, rgb(95, 94, 94), red)"
}



function showCountdown(starHour, starMin, endHour, endMin, countdownTime,sessionStatus,timeStatus,sessionBox) {
    const now = new Date();

    const dayOfWeek = now.getDay();  // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    const openingTime = new Date();
    openingTime.setHours(starHour, starMin, 0); // Set opening time to 7:00 AM

    const closingTime = new Date();
    closingTime.setHours(endHour, endMin, 0); // Set closing time to 3:00 PM


    if (dayOfWeek === 0 || dayOfWeek === 6) {
        let nextOpeningDay = new Date();
        nextOpeningDay.setDate(now.getDate() + (dayOfWeek === 0 ? 1 : 2)); // If today is Saturday, add 1 day for Monday, else add 2 days for Monday
        nextOpeningDay.setHours(starHour, starMin, 0);
        formatTime(nextOpeningDay - now, countdownTime)
        closeSession(sessionStatus, timeStatus, sessionBox) 
    }
   
    else if (now < openingTime) {
        // Countdown to opening time
        formatTime(openingTime - now, countdownTime);
        closeSession(sessionStatus, timeStatus, sessionBox)
    } 

    else if (now >= openingTime && now < closingTime) {
        // Open. Countdown to closing time
        formatTime(closingTime - now, countdownTime);
        openSession(sessionStatus, timeStatus, sessionBox)    
    } 

    else {
        // Closed. Countdown to next opening time
        const nextOpeningTime = new Date();
        nextOpeningTime.setDate(now.getDate() + 1);
        nextOpeningTime.setHours(starHour, starMin, 0);

        formatTime(nextOpeningTime - now, countdownTime);
        closeSession(sessionStatus, timeStatus, sessionBox)
    }

    
}

function formatTime(milliseconds, timer) {
    let hrs = Math.floor(milliseconds / (1000 * 60 * 60));
    let min = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((milliseconds % (1000 * 60)) / 1000);

    sec = sec < 10 ? "0" + sec : sec
    min = min < 10 ? "0" + min : min
    hrs = hrs < 10 ? "0" + hrs : hrs
    timer.innerText = hrs + "hrs " +  min + "mins " + sec + "sec"
    // return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Call the function to display the countdown

function london() {
    let countdownTime = document.getElementById("londonTimer")
    let sessionStatus = document.getElementById("londonSta")
    let timeStatus = document.getElementById("londonStaTim")
    let sessionBox = document.getElementById("londonSec")    

    
    starHour = 8
    starMin = 0

    endHour = 17
    endMin = 0
    showCountdown(starHour,starMin,endHour,endMin, countdownTime,sessionStatus,timeStatus,sessionBox)
}
setInterval(london, 1000)


function newYork() {
    let countdownTime = document.getElementById("newTimer")
    let sessionStatus = document.getElementById("newSta")
    let timeStatus = document.getElementById("newStaTim")
    let sessionBox = document.getElementById("newYorkSec")    

    
    starHour = 13
    starMin = 0

    endHour = 22
    endMin = 0
    showCountdown(starHour,starMin,endHour,endMin, countdownTime,sessionStatus,timeStatus,sessionBox)
}
setInterval(newYork, 1000)


function tokyo() {
    let countdownTime = document.getElementById("tokyoTimer")
    let sessionStatus = document.getElementById("tokyoSta")
    let timeStatus = document.getElementById("tokyoStaTim")
    let sessionBox = document.getElementById("tokyoSec")    

    
    starHour = 0
    starMin = 0

    endHour = 9
    endMin = 0
    showCountdown(starHour,starMin,endHour,endMin, countdownTime,sessionStatus,timeStatus,sessionBox)
}
setInterval(tokyo, 1000)


function sydney() {
    let countdownTime = document.getElementById("sydneyTimer")
    let sessionStatus = document.getElementById("sydneySta")
    let timeStatus = document.getElementById("sydneyStaTim")
    let sessionBox = document.getElementById("sydneySec")    

    
    starHour = 22
    starMin = 0

    endHour = 7
    endMin = 0
    showCountdown(starHour,starMin,endHour,endMin, countdownTime,sessionStatus,timeStatus,sessionBox)
}
setInterval(sydney, 1000)


function frankfurt() {
    let countdownTime = document.getElementById("frankTimer")
    let sessionStatus = document.getElementById("frankSta")
    let timeStatus = document.getElementById("frankStaTim")
    let sessionBox = document.getElementById("frankfurtSec")    

    
    starHour = 7
    starMin = 0

    endHour = 16
    endMin = 0
    showCountdown(starHour,starMin,endHour,endMin, countdownTime,sessionStatus,timeStatus,sessionBox)
}
setInterval(frankfurt, 1000)


