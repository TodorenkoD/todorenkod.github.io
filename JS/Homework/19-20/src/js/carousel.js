//---------Carousel plugin
$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular',
        animation: {
            duration: 800,
            easing: 'linear',
            complete: function() {},
        },
    });

    $('.jcarousel').jcarouselAutoscroll({
        interval: 7000,
        target: '+=1',
    });

    $('.jcarousel__pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('jcarousel__controls--active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('jcarousel__controls--active');
        })
        .on('click', function(e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function(page) {
                return '<a class="jcarousel__controls" href="#' + page + '">' + page + '</a>';
            }
        });
}());