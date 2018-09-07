$(document).ready(function() {
	var viewportHeight = $(window).height();
	var viewportWidth = $(window).width();
	$('.homepage_splash_screen').height(viewportHeight);

	$(window).resize(function() { //when the window is resized, recalculate window height
		viewportHeight = $(window).height();
		viewportWidth = $(window).width();

		$('.homepage_splash_screen').height(viewportHeight);
	});

	$(document).scroll(function() {
		if ($(document).scrollTop() >= viewportHeight) {
			$('.main_menu').toggleClass('main_menu--active', true);
		} else {
			$('.main_menu').toggleClass('main_menu--active', false);
		}
	});
});