const input = document.getElementById('priceInput');
const displayArea = document.getElementById('displayArea');
const errorContainer = document.getElementById('errorContainer');

let priceSpan, clearButton, errorMsg;

// Функция для очистки области отображения (спан и кнопка)
function clearDisplay() {
	if (priceSpan) {
		priceSpan.remove();
		priceSpan = null;
	}
	if (clearButton) {
		clearButton.remove();
		clearButton = null;
	}
	displayArea.innerHTML = '';
}

// Функция для очистки сообщений об ошибке
function clearError() {
	if (errorMsg) {
		errorMsg.remove();
		errorMsg = null;
	}
	errorContainer.innerHTML = '';
}

// При фокусе: добавить зеленую рамку и очистить предыдущие сообщения
input.addEventListener('focus', () => {
	clearDisplay();
	clearError();
	input.classList.add('green-border');
	input.classList.remove('red-border');
});

// При потере фокуса: проверяем введённое значение
input.addEventListener('blur', () => {
	// Удаляем зеленую рамку
	input.classList.remove('green-border');
	const value = parseFloat(input.value);

	// Если значение не является числом, ничего не делаем
	if (isNaN(value)) return;

	if (value < 0) {
		// Если значение меньше 0: выделяем красной рамкой и выводим сообщение об ошибке под полем
		input.classList.add('red-border');
		errorMsg = document.createElement('div');
		errorMsg.classList.add('error');
		errorMsg.textContent = 'Please enter correct price';
		errorContainer.appendChild(errorMsg);
	} else {
		// Если значение корректное:
		// Окрашиваем текст в поле ввода в зеленый цвет
		input.classList.add('green-text');
		// Создаем спан для отображения текущей цены и кнопку очистки
		priceSpan = document.createElement('span');
		priceSpan.classList.add('price-display');
		priceSpan.textContent = `Текущая цена: ${value}`;
		displayArea.appendChild(priceSpan);

		clearButton = document.createElement('button');
		clearButton.textContent = 'X';
		displayArea.appendChild(clearButton);

		// По клику на кнопку "X" удаляем спан, кнопку и очищаем значение поля
		clearButton.addEventListener('click', () => {
			clearDisplay();
			input.value = '';
			input.classList.remove('green-text');
		});
	}
});
