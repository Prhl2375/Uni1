document.addEventListener('DOMContentLoaded', function() {
	const tabsContainer = document.querySelector('.tabs');
	const tabsContentContainer = document.querySelector('.tabs-content');

	// Set initial state: display content for the tab with the "active" class
	function initializeTabs() {
		const tabs = tabsContainer.querySelectorAll('.tabs-title');
		const contentItems = tabsContentContainer.children;
		Array.from(contentItems).forEach((item, index) => {
			if (tabs[index] && tabs[index].classList.contains('active')) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
	}

	initializeTabs();

	// Attach a click listener to the tabs container (event delegation)
	tabsContainer.addEventListener('click', function(e) {
		if (e.target && e.target.classList.contains('tabs-title')) {
			// Get all tab titles as an array and determine the index of the clicked tab
			const tabs = Array.from(tabsContainer.children);
			const clickedIndex = tabs.indexOf(e.target);

			// Remove active class from all tabs and add it to the clicked one
			tabs.forEach(tab => tab.classList.remove('active'));
			e.target.classList.add('active');

			// Show the corresponding content and hide all others
			const contentItems = tabsContentContainer.children;
			Array.from(contentItems).forEach((item, index) => {
				item.style.display = (index === clickedIndex) ? 'block' : 'none';
			});
		}
	});
});
