// JavaScript Document
var topBar = $('.top-bar');
topBar.css('height', 'auto');
topBar.addClass('clear');
$(window).resize(function() {
	if (document.documentElement.clientWidth < 975) {
		var container = $('.box-c');
		var rightColumn = $(container.children()[0]);
		var centerColumn = $(container.children()[1]);
		container.prepend(centerColumn);
		centerColumn.css('margin-right', '0px');
		rightColumn.css('float', 'none');
		rightColumn.css('width', 'auto');
	}
	else {
		var container = $('.box-c');
		var rightColumn = $(container.children()[0]);
		var centerColumn = $(container.children()[1]);
		container.prepend(rightColumn);
		centerColumn.removeAttr('style');
		rightColumn.removeAttr('style');
	}
});