var bulb = document.getElementById("lightBulb");
var switchOn = document.getElementById("switchOn");
var switchOff = document.getElementById("switchOff");
var screen = document.getElementsByTagName("BODY")[0];

switchOn.addEventListener("click", function () {
	bulb.src = "images/pic_bulbon.gif";
	screen.className = "night-time";
});

switchOff.addEventListener("click", function () {
	bulb.src = "images/pic_bulboff.gif";
	screen.className = "";
});