$('#sidebarToggle').click(function() {
    var symbol = $(this).text() === '+' ? '-' : '+';

    $('#sidebar' ).slideToggle('slow');
    $(this).text(symbol);
});
