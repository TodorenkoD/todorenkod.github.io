$('.color span').click(function(){
	
		var eventTarget = $(event.target);
		if(!eventTarget.hasClass('active')){
			eventTarget.siblings('.active').toggleClass('active');
		
			eventTarget.parents('.phone').find('.img img.current').toggleClass('current');
			eventTarget.parents('.phone').find('.img img[data-color="'+ eventTarget.attr('class') + '"]').addClass('current');
		
			eventTarget.addClass('active');
		
			var link = eventTarget.attr('data-ref');
			eventTarget.closest('.phone').find('a:first').attr("href", link);
			var imgClass = eventTarget.closest('.phone').find('.img:first');
		}

})
