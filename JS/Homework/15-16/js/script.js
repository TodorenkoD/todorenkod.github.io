'use strict;'

$(function() {
    var tmpl = _.template($('#tmpl').html());
    var $resultBlock = $('.results-block');
    var $searchLine = $('.search-input');
    var $sendButton = $('.search-button');
    
    $searchLine.on('keypress', function(event) {
        if (event.which === 13) {
          //event.preventDefault();
            getResult();
            return false;
        };       
    });

    $sendButton
    .on('click', function() {
        getResult();       
    });
    

    function getResult() {
        $resultBlock.empty();
        var query = $('.search-input').val();
        if (query === '') return;  

        $.ajax({
            url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyDLi8MYYo68YL5rifFEZgnATqgbLEyfQ0g&cx=010880419457600908025:odzs2qd_epw&q=" + query,
            method: 'GET',
            dataType: "jsonp",
            success: function(response) {
                response.error ? console.log('code: ' + response.error.code + ' - ' + response.error.message) : null;
                
                console.log(response);
                var content = tmpl(response);
                 $resultBlock.append(content);
            },
            error: function(error, XMLHttpRequest) {
                console.log(error);
                console.log(XMLHttpRequest);                
            }
        });
    };

});

