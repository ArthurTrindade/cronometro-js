const timer = document.querySelector('#timer');


let secunds = 0;
let timerInit;

function getTimeFromSec(sec) {

    const data = new Date(sec * 1000);

    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC'
    });

}

function startTimer() {
    timerInit = setInterval(function() {
        timer.innerHTML = getTimeFromSec(secunds);
        secunds++;
    }, 1000);
}


document.addEventListener('click', function(event) {
    const element = event.target;

    if (element.classList.contains('zerar')) {
        clearInterval(timerInit);
        timer.innerHTML = '00:00:00';
        secunds = 0;
    }

    if (element.classList.contains('pausar')) {
        clearInterval(timerInit);
    }

    if (element.classList.contains('iniciar')) {
        clearInterval(timerInit);
        startTimer();
    }
});