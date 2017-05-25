(function() {
    'use strict';

    var hSpan = document.querySelector('.hours'),
        minSpan = document.querySelector('.mins'),
        secSpan = document.querySelector('.secs'),
        msSpan = document.querySelector('.ms'),
        starter = document.querySelector('.starter'),
        clearer = document.querySelector('.clearer'),
        btnStart = false,
        timerGo,
        delay = 0,
        start = 0;

    starter.addEventListener('click', startTimer);
    clearer.addEventListener('click', clearTimer);

    function startTimer() {
        if (btnStart === false) {
            if (delay) {
                start = start + Date.now() - delay;
            } else {
                start = Date.now();
            }
            timerGo = setInterval(runTime, 1);
            btnStart = true;
            starter.innerHTML = 'Пауза';
        } else {
            delay = Date.now();
            btnStart = false;
            clearInterval(timerGo);
            starter.innerHTML = 'Продолжить';
        }
    }

    function runTime() {
        var delta = Date.now() - start,
            hours = Math.floor(delta / 3600000);

        delta = delta - hours * 3600000;
        var mins = Math.floor(delta / 60000);

        delta = delta - mins * 60000;
        var secs = Math.floor(delta / 1000);

        delta = delta - secs * 1000;
        var ms = delta;

        hSpan.innerHTML = formatTime(hours, 2);
        minSpan.innerHTML = formatTime(mins, 2);
        secSpan.innerHTML = formatTime(secs, 2);
        msSpan.innerHTML = formatTime(ms, 3);
    }

    function formatTime(num, maxNumbers) {
        var numStr = num + '';
        while (numStr.length < maxNumbers) {
            numStr = '0' + numStr;
        }
        return numStr;
    }

    function clearTimer() {
        starter.innerHTML = 'Старт';
        btnStart = false;
        hSpan.innerHTML = '00';
        minSpan.innerHTML = '00';
        secSpan.innerHTML = '00';
        msSpan.innerHTML = '000';
        delay = 0;
        clearInterval(timerGo);
    }
})();