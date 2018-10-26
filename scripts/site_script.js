$(document).ready(function() {
	var viewportHeight = $(window).height();
	var viewportWidth = $(window).width();

	$(window).resize(function() { //when the window is resized, recalculate window height
		viewportHeight = $(window).height();
		viewportWidth = $(window).width();
	});

	$('#drop_down_menu').click(function() {
		$('.full_context_menu').toggleClass('full_context_menu--active', true);
	});

	$('#drop_down_menu-exit').click(function() {
		$('.full_context_menu').toggleClass('full_context_menu--active', false);
	});

	$(document).scroll(function() {
		if ($(document).scrollTop() + viewportHeight + 10 >= $(document).height()) {
			$('.main_menu').toggleClass('main_menu--active', false);
		} else {
			$('.main_menu').toggleClass('main_menu--active', true);
		}
	});
});