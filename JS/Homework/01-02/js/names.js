'use scrict';

var arr = [];

	for (var i = 0; i < 5; i++) {
	    arr[i] = +prompt('Введите любое имя');
	}

	console.log(arr);

var userName = +prompt('Введите имя пользователя:');
	console.log('Вас зовут ' + userName);

for (var i = 0; i < 5; i++) {
	if (arr[i] == userName) {
	alert(userName + ', Вы успешно вошли');
	break;
	}
}

if ( i>=5 ){
	alert('Нет такого имени');
}
