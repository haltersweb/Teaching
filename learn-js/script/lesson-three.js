var firstField = document.getElementById("num1");
var secondField = document.getElementById("num2");
var totalField = document.getElementById("guessSum");
var testBtn = document.getElementById("testSum");

testBtn.addEventListener('click', function () {
	var num1 = firstField.value;
	var num2 = secondField.value;
	var result = totalField.value;
	if (parseFloat(num1) + parseFloat(num2) === parseFloat(result)) {
		alert('CONGRATULATIONS. Your sum is correct.');
	} else {
		alert('Your sum is incorrect. Try again.');
	}
});