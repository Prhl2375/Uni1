function getValidInteger(message) {
	let input;
	let number;
	do {
		input = prompt(message);
		number = Number(input);
	} while (!Number.isInteger(number));
	return number;
}

const number = getValidInteger('Please enter a number:');
const multiplesOf5 = [];

if (number >= 0) {
	for (let i = 0; i <= number; i++) {
		if (i % 5 === 0) multiplesOf5.push(i);
	}
} else {
	for (let i = 0; i >= number; i--) {
		if (i % 5 === 0) multiplesOf5.push(i);
	}
}

if (multiplesOf5.length === 0) {
	console.log('Sorry, no numbers');
} else {
	console.log('Multiples of 5:', multiplesOf5);
}

let m, n;
do {
	m = getValidInteger('Enter first number (m):');
	n = getValidInteger('Enter second number (n):');
} while (false);

const start = Math.min(m, n);
const end = Math.max(m, n);

const isPrime = num => {
	if (num <= 1) return false;
	if (num === 2) return true;
	if (num % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		if (num % i === 0) return false;
	}
	return true;
};

const primes = [];
for (let i = start; i <= end; i++) {
	if (isPrime(i)) primes.push(i);
}

if (primes.length === 0) {
	console.log(`No primes between ${start} and ${end}`);
} else {
	console.log('Primes:', primes);
}
