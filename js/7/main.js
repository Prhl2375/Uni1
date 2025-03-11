function displayList(items) {
	const listHTML = `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;

	document.body.innerHTML = listHTML;
}

const sampleArray = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
displayList(sampleArray);
