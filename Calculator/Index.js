function Sum(v1, v2){
	return parseInt(v1.value) + parseInt(v2.value);
}

function Divide(v1, v2) {
	return parseInt(v1.value) / parseInt(v2.value);
}

function Subtract(v1, v2){
	return parseInt(v1.value) - parseInt(v2.value);
}

function Multiply(v1, v2){
	return parseInt(v1.value) * parseInt(v2.value);
}

function ExecuteMathematicalOperation(){

	// # Get Display properties for draw result
	var getDisplay = document.querySelector('div#display');

	// # Get Data to execute the mathematical operations
	var value1 = document.querySelector('input#v1');
	var value2 = document.querySelector('input#v2');
	var operand = document.querySelector('select#oper');

	switch(operand.value){

		case '+':
			getDisplay.innerHTML = `<strong>${Sum(value1, value2)}</strong>`;
			break;

		case '-':
			getDisplay.innerHTML = `<strong>${Subtract(value1, value2)}</strong>`;
			break;

		case '*':
			getDisplay.innerHTML = `<strong>${Multiply(value1, value2)}</strong>`;
			break;

		case '/':
			getDisplay.innerHTML = `<strong>${Divide(value1, value2)}</strong>`;
	}
}