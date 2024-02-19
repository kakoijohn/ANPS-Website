$(document).ready(function() {
	$('.main_menu').load("/html/snippets/main_menu_tabs.html"); // load the main menu

	$('.full_context_menu').load("/html/snippets/full_context_menu.html"); // load the full context menu

	$('.page_footer').load("/html/snippets/page_footer.html"); // load the page footer


	var viewportHeight = $(window).height();
	var viewportWidth = $(window).width();

	console.log(viewportHeight);

	$(window).resize(function() { //when the window is resized, recalculate window height
		viewportHeight = $(window).height();
		viewportWidth = $(window).width();
	});

	$('.under_construction .exit').click(function() {
		$('.under_construction').css('display', 'none');
	});
});