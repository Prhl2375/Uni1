function createNewUser() {
	const firstName = prompt('Enter your first name:');
	const lastName = prompt('Enter your last name:');
	const birthday = prompt('Enter your birthday (dd.mm.yyyy):');

	const newUser = {
		firstName,
		lastName,
		birthday,

		getLogin() {
			return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`;
		},

		getAge() {
			const [day, month, year] = this.birthday.split('.').map(Number);
			const birthDate = new Date(year, month - 1, day);
			const today = new Date();

			let age = today.getFullYear() - birthDate.getFullYear();
			const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
				(today.getMonth() === birthDate.getMonth() &&
					today.getDate() >= birthDate.getDate());

			return hasBirthdayPassed ? age : age - 1;
		},

		getPassword() {
			const birthYear = this.birthday.split('.')[2];
			return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${birthYear}`;
		}
	};

	return newUser;
}

const user = createNewUser();
console.log('User object:', user);
console.log('Age:', user.getAge());
console.log('Password:', user.getPassword());
