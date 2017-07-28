requirejs.config({
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",

        "lodash": "https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min"
        
    }
});

require([
        'model',
        'view',
        'controller',
        'jquery',
        'lodash'
    ],

    function(model, view, controller, $, _) {
        var initialList = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'];
        var model = new model(initialList);
        var view = new view(model);
        var controller = new controller(model, view);
    }
);