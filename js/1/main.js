const userName = prompt('Please enter your name:');

const userAge = parseInt(prompt('Please enter your age:'), 10);

if (userAge < 18) {
	alert('You are not allowed to visit this website');
} else if (userAge <= 22) {
	const confirmation = confirm('Are you sure you want to continue?');

	if (confirmation) {
		alert(`Welcome, ${userName}`);
	} else {
		alert('You are not allowed to visit this website');
	}
} else {
	alert(`Welcome, ${userName}`);
}
