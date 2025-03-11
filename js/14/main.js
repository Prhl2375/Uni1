$(document).ready(function() {
	var savedTheme = localStorage.getItem('theme') || 'default';
	if (savedTheme === 'alternate') {
		$('body').removeClass('theme-default').addClass('theme-alternate');
	} else {
		$('body').removeClass('theme-alternate').addClass('theme-default');
	}

	$('.tabs-title').click(function() {
		$('.tabs-title').removeClass('active');
		$(this).addClass('active');
		var index = $('.tabs-title').index(this);
		$('.tabs-content li').hide().eq(index).show();
	});

	$('#theme-toggle').click(function() {
		if ($('body').hasClass('theme-default')) {
			$('body').removeClass('theme-default').addClass('theme-alternate');
			localStorage.setItem('theme', 'alternate');
		} else {
			$('body').removeClass('theme-alternate').addClass('theme-default');
			localStorage.setItem('theme', 'default');
		}
	});
});
