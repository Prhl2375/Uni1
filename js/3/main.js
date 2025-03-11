const num1 = Number(prompt('Enter the first number:'));
const num2 = Number(prompt('Enter the second number:'));
const operation = prompt('Enter the operation (+, -, *, /):');

const calculate = (a, b, op) => {
	switch (op) {
		case '+': return a + b;
		case '-': return a - b;
		case '*': return a * b;
		case '/': return b !== 0 ? a / b : 'Division by zero error';
		default: return 'Invalid operator';
	}
};

const result = calculate(num1, num2, operation);
console.log('Calculation result:', result);
