var firstField = document.getElementById("num1");
var secondField = document.getElementById("num2");
var totalElem = document.getElementById("total");
var addBtn = document.getElementById("add");

addBtn.addEventListener('click', function () {
	var num1 = firstField.value;
	var num2 = secondField.value;
	var total;
	total = parseInt(num1) + parseInt(num2);
	totalElem.innerHTML = total;
});