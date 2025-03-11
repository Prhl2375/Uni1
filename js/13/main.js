document.addEventListener('DOMContentLoaded', function() {
	const tabsContainer = document.querySelector('.tabs');
	const tabsContentContainer = document.querySelector('.tabs-content');

	function initializeTabs() {
		const tabs = tabsContainer.querySelectorAll('.tabs-title');
		const contentItems = tabsContentContainer.children;
		Array.from(contentItems).forEach((item, index) => {
			item.style.display = tabs[index] && tabs[index].classList.contains('active') ? 'block' : 'none';
		});
	}
	initializeTabs();

	tabsContainer.addEventListener('click', function(e) {
		if (e.target && e.target.classList.contains('tabs-title')) {
			const tabs = Array.from(tabsContainer.children);
			const clickedIndex = tabs.indexOf(e.target);
			tabs.forEach(tab => tab.classList.remove('active'));
			e.target.classList.add('active');
			const contentItems = tabsContentContainer.children;
			Array.from(contentItems).forEach((item, index) => {
				item.style.display = (index === clickedIndex) ? 'block' : 'none';
			});
		}
	});

	const themeToggleBtn = document.getElementById('theme-toggle');

	let savedTheme = localStorage.getItem('theme') || 'default';

	function applyTheme(theme) {
		if (theme === 'alternate') {
			document.body.classList.remove('theme-default');
			document.body.classList.add('theme-alternate');
		} else {
			document.body.classList.remove('theme-alternate');
			document.body.classList.add('theme-default');
		}
	}

	applyTheme(savedTheme);

	themeToggleBtn.addEventListener('click', () => {
		const currentTheme = document.body.classList.contains('theme-alternate') ? 'alternate' : 'default';
		const newTheme = currentTheme === 'default' ? 'alternate' : 'default';
		applyTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	});
});
