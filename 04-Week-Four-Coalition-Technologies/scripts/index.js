'use strict';

$(document).ready(function () {
	$('#mountain-one, #mountain-two').click(function () {
		$('#mountain-one, #mountain-two').toggleClass('active inactive');
		$('#tab-one-image, #tab-two-image').toggleClass('active-tab-image inactive-tab-image');
		$('#schedule-section').toggleClass('active-section inactive-section');
	});

	$('#accordion-button-one').click(function () {
		$('#accordion-button-one').toggleClass('"" collapsed');
		$('#flush-collapseOne').toggleClass('"" show');
	});
	$('#accordion-button-two').click(function () {
		$('#accordion-button-two').toggleClass('"" collapsed');
		$('#flush-collapseTwo').toggleClass('"" show');
	});
});
