const icons = document.querySelectorAll('.icon-password');
icons.forEach(icon => {
	icon.addEventListener('click', function() {
		const targetId = this.getAttribute('data-target');
		const input = document.getElementById(targetId);
		if (input.type === 'password') {
			input.type = 'text';
			// Change icon appearance: use fa-eye-slash when password is shown
			this.classList.remove('fa-eye');
			this.classList.add('fa-eye-slash');
		} else {
			input.type = 'password';
			this.classList.remove('fa-eye-slash');
			this.classList.add('fa-eye');
		}
	});
});

const form = document.querySelector('.password-form');
form.addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent page reload
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;
	const errorDiv = document.getElementById('error-message');
	errorDiv.textContent = ''; // Clear any previous error

	if (password === confirmPassword) {
		alert('You are welcome');
	} else {
		errorDiv.textContent = 'Нужно ввести одинаковые значения';
	}
});
