$(document).ready(function() {
	$('nav a').click(function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});

	$('#toggle-hot-news').click(function() {
		$('.hot-news-grid').slideToggle();
	});
});
