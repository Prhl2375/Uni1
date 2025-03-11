document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.btn');

	document.addEventListener('keydown', (e) => {
		buttons.forEach(btn => btn.style.backgroundColor = '#33333a');

		const pressedKey = e.key.toUpperCase();

		buttons.forEach(btn => {
			if (btn.textContent.trim().toUpperCase() === pressedKey) {
				btn.style.backgroundColor = 'blue';
			}
		});
	});
});
