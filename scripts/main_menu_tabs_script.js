$('#drop_down_menu').click(function() {
    console.log("clicked drop down");
    $('.full_context_menu').toggleClass('full_context_menu--active', true);
});

$('#drop_only_menu').click(function() {
    $('.full_context_menu').toggleClass('full_context_menu--active', true);
});	
