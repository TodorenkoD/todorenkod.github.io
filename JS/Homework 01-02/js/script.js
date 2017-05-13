'use scrict';

function calcNumbers(x, n) {
            var result = x;

            for (var i = 1; i < n; i++) {
                result *= x;
            }

            return result;
        }

        var x = prompt("Введите число:", '');
        var n = prompt("В какую степень возводим?", '');

        if (n < 0) {
            alert('Степень ' + n + ' не поддерживается, введите число больше 0'
            );
        } else if ((n == 0) && (x > 0) || (x < 0)) {
            		console.log('1');
        } else if (n == 0 && x == 0) {
            		alert('0 в степени 0 - не существует');
        } else{
            console.log(calcNumbers(x, n));
        }