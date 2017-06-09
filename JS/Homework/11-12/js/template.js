//Template articles

$(function() {

    var articles = [
        {
            title: 'Article number 1',
            text: 'Maxime officia reprehenderit tempore voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse ex inventore ipsum labore, laudantium porro quidem quisquam recusandae rem repellendus saepe voluptas. Esse maxime officia reprehenderit tempore voluptatibus.'
        },

        {
            title: 'Article number 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse ex inventore ipsum labore, laudantium porro quidem quisquam recusandae rem repellendus saepe voluptas. Esse maxime officia reprehenderit tempore voluptatibus.'
        },

        {
            title: 'Article number 3',
            text: 'Esse maxime officia reprehenderit tempore voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse ex inventore ipsum labore, laudantium porro quidem quisquam recusandae rem repellendus saepe voluptas. Esse maxime officia reprehenderit tempore voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse ex inventore ipsum labore, laudantium porro quidem quisquam recusandae rem repellendus saepe voluptas. Esse maxime officia reprehenderit tempore voluptatibus'
        },

        {
            title: 'Article number 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse ex inventore ipsum labore, laudantium porro quidem quisquam recusandae rem repellendus saepe voluptas. Esse maxime officia reprehenderit tempore voluptatibus.',
        }

    ];

    var template = $('#articles-template').html();

    var main = $('.main');

    var content = tmpl(template, {data: articles});

    $(main).append(content);

});
