$(function () {
            $('.bxslider').bxSlider({
                auto: true,
				adaptiveHeight: true,
            });
     
				$('#select').selectmenu();
			});

	
	$(function() {
		$('.dropmenu' ).hover(
			function(){
				$(this).children('.sub-menu').slideDown(200);
			},
			function(){
				$(this).children('.sub-menu').slideUp(200);
			}
		);
	});
	
	$('input').change(function() {
	  if ($(this).is(':checked')) {
		$(this).closest('label').addClass('checked');
	  } else {
		$(this).closest('label').removeClass('checked');
	  }
	});