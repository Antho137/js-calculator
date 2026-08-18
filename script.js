const result = document.querySelector('#result');
const clear = document.querySelector('#clear');
const clearEntry = document.querySelector('#clear-entry');
const percent = document.querySelector('#percent');
const deleteLast = document.querySelector('#dlt-last');
const divideBy = document.querySelector('#divide-by');
const square = document.querySelector('#sq');
const squareRoot = document.querySelector('#sqrt');
const compute = document.querySelector('.equal');

const buttons = document.querySelectorAll('.number, .operator');
let input = [];

Array.from(buttons).forEach((button) => {
	button.addEventListener('click', () => {
		const operator = ['+', '-', '/', '*']
		if (input[input.length-1] === '=' && !operator.includes(button.value)) {
			result.value = button.value;
		}
        else {
			result.value += button.value;
		}
        input.push(button.value) 		
	})
})

compute.addEventListener('click', () => {
    try {
        if (result.value !== '') {
            result.value = Function(`return ${result.value}`)();
        }
    } catch (error) {
        result.value = 'Error';
    }
})

percent.addEventListener('click', () => {
	result.value = result.value / 100;
})

divideBy.addEventListener('click', () => {
	result.value = 1 / result.value;
})

square.addEventListener('click', () => {
	result.value = result.value * result.value; 
})	

squareRoot.addEventListener('click', () => {
	result.value = Math.sqrt(result.value); 
})	

clear.addEventListener('click', () => {
	result.value = '';
})	

clearEntry.addEventListener('click', () => {
	result.value = result.value.replace(/[\d.]*$/, '');
})

deleteLast.addEventListener('click', () => {
	result.value = result.value.slice(0, -1);
})