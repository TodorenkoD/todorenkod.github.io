define(
    'model', ['jquery'],

    function($) {
        'use strict';

        function Model(data) {
            var self = this;
            self.data = data;
            self.crossedItems = [];

            self.addItem = function(item) {
                item.length !== 0 ? self.data.push(item) : false;
                return self.data;
            };

            self.removeItem = function(item) {
                var index = self.data.indexOf(item);
                index !== -1 ? self.data.splice(index, 1) : false;
                return self.data;
            };

            self.crossItem = function(item) {
                var crossed = item.parent().next().html();
                var index = self.crossedItems.indexOf(crossed);
                index == -1 ? self.crossedItems.push(crossed) : self.crossedItems.splice(index, 1);
                return self.data;
            };

            self.editItem = function(item) {
                item.attr('contenteditable', 'true');
                item.focus();
                return self.data;
            }
        };
        return Model;
    }
);