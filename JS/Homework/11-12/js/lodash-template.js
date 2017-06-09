var navTemplate = document.getElementById('nav-tmpl').
    innerHTML.trim();
navTemplate = _.template(navTemplate);

var nav = document.querySelector('.nav');

nav.innerHTML = navTemplate({
    'items': ['Главная', 'пункт меню1', 'пункт меню2', 'пункт меню3']
});