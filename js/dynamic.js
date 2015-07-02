function header() {
	if ( $('header').width() <= 1260 ) {
		$('header .slider').width($('header').width()-(1260-870));
	}
	else {
		$('header .slider').width(870);
	}
}
$(document).ready(function() {
	$('header .menu > li > ul').parent().addClass('sub');
	$('header .menu > li.sub').hover(
		function() {
			$(this).find('ul').css({
				'left': $(this).outerWidth()+'px'
			}).stop(true,true).delay(100).fadeIn(200);
			$(this).addClass('current');
		},
		function() {
			$(this).find('ul').stop(true,true).delay(100).fadeOut(200);
			$(this).removeClass('current');
		}
	);
	if ( $('.slider').length > 0 ) {
		$('.slider > div').slides({
			generatePagination: false,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 750,
			slideEasing: 'easeInOutCubic',
			play: 10000,
			pause: 2500
		});
		$('.slider').bind('swipeleft', function() {
			$('.slider > div .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider > div .prev').trigger('click');
		});
		header();
	}
	$('.gotop').bind('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 750, 'easeInOutCubic');
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});
$(window).resize(function() {
	if ( $('.slider').length > 0 ) {
		header();
	}
});
$(window).load(function() {
	if ( $('.about').length > 0 ) {
		$('.about > div').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 750,
			slideEasing: 'easeInOutCubic',
			autoHeight: true,
			play: 0
		});
		$('.about > div').bind('swipeleft', function() {
			$('.about > div .next').trigger('click');
		});
		$('.about > div').bind('swiperight', function() {
			$('.about > div .prev').trigger('click');
		});
	}
});