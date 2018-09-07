$(document).ready(function() {
	$('#drop_down_menu').click(function() {
		$('.full_context_menu').toggleClass('full_context_menu--active', true);
	});

	$('#drop_down_menu-exit').click(function() {
		$('.full_context_menu').toggleClass('full_context_menu--active', false);
	});
});