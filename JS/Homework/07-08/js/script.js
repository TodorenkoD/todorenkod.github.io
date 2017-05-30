$(function() {
    var content = $('.tab__content'),
        item = $('.tab__item');

    item.click(function() {
        $(this).
            focus().
            addClass('active').
            siblings().removeClass('active');

        content.
            addClass('tab__content-show').
            eq($(this).index()).
            siblings().removeClass('tab__content-show');
    });

    item.focus(function() {
        $(this).
            addClass('active').
            siblings().removeClass('active');

        content.
            addClass('tab__content-show').
            eq($(this).index()).
            siblings().removeClass('tab__content-show');
    });
});


$("input").hover(function() {
        $(this).next(".hint").animate({opacity: "show", top: "-5"}, "slow");
    }, function() {
        $(this).next(".hint").animate({opacity: "hide", top: "-5"}, "fast");
});



$( ".form__submit" ).click(function() {
  $( ".hint" ).toggle( "slow" );
});

