function createNewUser() {
	const firstName = prompt('Enter your first name:');
	const lastName = prompt('Enter your last name:');

	const newUser = {
		firstName,
		lastName,
		getLogin() {
			return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`;
		}
	};

	return newUser;
}

const user = createNewUser();
console.log('User login:', user.getLogin());
