// The (rough) dates that decisions will be released
const colgateDate = Date.parse('15 Dec 2024 00:00:00 EST');

const polytechnicDate = Date.parse('15 Dec 2024 00:00:00 EST');
const binghamtonDate = Date.parse('15 Jan 2025 00:00:00 EST');
const ncstateDate = Date.parse('30 Jan 2025 00:00:00 EST');
const stonybrookDate = Date.parse('31 Jan 2025 00:00:00 EST');
const rensselaerDate = Date.parse('1 Feb 2025 00:00:00 EST');

const buffaloDate = Date.parse('1 Mar 2025 00:00:00 EST');
const carnegieDate = Date.parse('1 Apr 2025 00:00:00 EST');
const columbiaDate = Date.parse('1 Apr 2025 00:00:00 EST');
const harvardDate = Date.parse('1 Apr 2025 00:00:00 EST');
const cornellDate = Date.parse('1 Apr 2025 00:00:00 EST');

const orderedDates =
[
    colgateDate, polytechnicDate, binghamtonDate, ncstateDate, stonybrookDate,
    buffaloDate, rensselaerDate, carnegieDate, columbiaDate, harvardDate, cornellDate
]

// The headers that display the countdown
const colgateTimer = document.getElementById("colgateTimer");

const polytechnicTimer = document.getElementById("polytechnicTimer");
const binghamtonTimer = document.getElementById("binghamtonTimer");
const ncstateTimer = document.getElementById("ncstateTimer");
const stonybrookTimer = document.getElementById("stonybrookTimer");
const buffaloTimer = document.getElementById("buffaloTimer");
const rensselaerTimer = document.getElementById("rensselaerTimer");

const carnegieTimer = document.getElementById("carnegieTimer");
const columbiaTimer = document.getElementById("columbiaTimer");
const harvardTimer = document.getElementById("harvardTimer");
const cornellTimer = document.getElementById("cornellTimer");

const orderedTimers =
[
    colgateTimer, polytechnicTimer, binghamtonTimer, ncstateTimer, stonybrookTimer,
    buffaloTimer, rensselaerTimer, carnegieTimer, columbiaTimer, harvardTimer, cornellTimer
]

const dayLength = 24 * 60 * 60 * 1000 // hours * minutes * seconds * milliseconds
const hourLength = 60 * 60 * 1000; // minutes * seconds * milliseconds
const minuteLength = 60 * 1000; // seconds * milliseconds

function updateTimerLabels() {
    let currentTime = new Date();
    for (let i = 0; i < orderedDates.length; i++) {
        let daysLeft = Math.round(Math.abs((orderedDates[i] - currentTime) / dayLength));
        //let hoursLeft = Math.round(Math.abs(((orderedDates[i] - currentTime) - (daysLeft*dayLength))/hourLength));
        //let minutesLeft = Math.round(Math.abs(((orderedDates[i] - currentTime) - (daysLeft*dayLength) - (hoursLeft*hourLength))/minuteLength))

        orderedTimers[i].innerHTML = daysLeft + " Days";
    }
    buffaloTimer.parentElement.classList.add("accepted");
    buffaloTimer.innerHTML = "ACCEPTED";
}

// update all of the labels when the site is opened
updateTimerLabels();
// update all of the labels once every second
setInterval(updateTimerLabels, 1000);
