define(
    'controller', ['jquery'],

    function($) {
        'use strict';

        function Controller(model, view) {
            var self = this;
            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', 'li', editItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.mark', crossItem);

            function editItem() {
                var item = $(this);
                model.editItem(item);
            }

            function addItem() {
                var list = view.elements.listContainer;
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
                updateClass();
            };

            function removeItem() {
                var list = view.elements.listContainer;
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
                updateClass();
            };

            function crossItem() {
                var item = $(this);
                item.parent().toggleClass('done');
                item.parent().next().toggleClass('crossed');
                model.crossItem(item);
            };

            function updateClass() {
                var arr = model.crossedItems;
                var list = view.elements.listContainer;

                for (var i = 0; i < arr.length; i++) {
                    var item = list.find("li:contains(" + "'" + arr[i] + "')");
                    item.addClass('crossed');
                    item.prev().addClass('done');
                };
            };
        };
        return Controller;
    }
);