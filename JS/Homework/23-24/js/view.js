define(
    'view', ['jquery'],

    function($) {
        'use strict';

        function View(model) {
            var self = this;

            function init() {
                var wrapper = _.template($('#wrapper-template').html());
                $('body').append(wrapper);

                self.elements = {
                    input: $('.new-item-value'),
                    addBtn: $('.item-add'),
                    listContainer: $('.item-list')
                };
                self.renderList(model.data);
            };

            self.renderList = function(data) {
                var list = _.template($('#list-template').html());
                self.elements.listContainer.html(list({ data: data }));
            };
            init();
        };
        return View;
    }
);