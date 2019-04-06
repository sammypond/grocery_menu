function getReceipt() {
	var text1 = "<h3>Your Order:</h3>";
	var runningTotal = 0;
	var drinksTotal = 0;
	var drinksArray = document.getElementsByClassName("drinks");
	for (var i = 0; i < drinksArray.length; i++) {
		if (drinksArray[i].checked) {
			var selectedDrink = drinksArray[i].value;

		}
}

if (selectedDrink === "six pack") { 
	drinksTotal = 10;
}	else if (selectedDrink === "juice box") {
	drinksTotal = 4;
}	else if (selectedDrink === "La Croix") {
	drinksTotal = 6;
}	else if (selectedDrink === "bottled water") {
	drinksTotal = 3;
}
runningTotal = drinksTotal;
text1 = text1 + " " + selectedDrink + " " + "$" + drinksTotal + "<br>";
getSnacks(runningTotal, text1);
};

function getSnacks(runningTotal, text1) {
	var snacksTotal = 0;
	var snacksArray = document.getElementsByClassName("snacks");
		for (var i = 0; i < snacksArray.length; i++) {
			if (snacksArray[i].checked) {
				var selectedSnack = snacksArray[i].value;
			}
		}
if (selectedSnack === "corn nuts") {
	snacksTotal = 2;
} else if (selectedSnack === "chips") {
	snacksTotal = 4;
} else if (selectedSnack === "donuts") {
	snacksTotal = 5;
} else if (selectedSnack === "gum") {
	snacksTotal = 1;
}
runningTotal = (runningTotal + snacksTotal); 
text1 = text1 + " " + selectedSnack + " " + "$" + snacksTotal + "<br>";
getOther(runningTotal, text1);
}; 

function getOther(runningTotal, text1) {
	var otherTotal = 0;
	var otherArray = document.getElementsByClassName("other");
		for (i = 0; i < otherArray.length; i++) {
			if (otherArray[i].checked) {
				var selectedOther = otherArray[i].value;
			}
		}

if (selectedOther === "advil") {
	otherTotal = 1;
} else if (selectedOther === "tums") {
	otherTotal = 1;
} else if (selectedOther === "tissues") {
	otherTotal = 2;
} else if (otherTotal === "cigarettes") {
	otherTotal = 7;
}
runningTotal = (runningTotal + otherTotal);
text1 = text1 + " " + selectedOther + " " + "$" + otherTotal + "<br>";
document.getElementById("showText1").innerHTML = text1;
document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};











