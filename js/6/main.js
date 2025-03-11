function filterBy(array, dataType) {
	return array.filter(item => typeof item !== dataType);
}

const result = filterBy(['hello', 'world', 23, '23', null], 'string');
console.log(result);
