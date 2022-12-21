let numOptions = 0;
const Options = [];

function rndHexColor() {
	let hexColor = "#";
	for(let i = 0; i < 3; i++) {
		let random = Math.floor(Math.random() * 256);
		let hexStr = random.toString(16);
		hexColor = hexColor + hexStr;
	}
	return hexColor.toUpperCase();
}

function startGame() {
	for (var i = 0; i < numOptions - 1; i++) {
		Options.push(rndHexColor());
	}
	console.log(Options);
	let wantedHexColor = Options[Math.floor(Math.random() * (numOptions - 1))];
	document.getElementById("wantedHexColor").innerHTML = wantedHexColor;
}

function reset() {

	startGame();
}

function difficulty(num) {
	switch(num){
	case 1:
		console.log("Difficulty is set to EASY.");
		break;
	case 2:
		console.log("Difficulty is set to MEDIUM.");
		break;
	case 3:
		console.log("Difficulty is set to HARD.");
		break;
	case 4:
		console.log("Difficulty is set to EXTREME.");
		break;
	default:
		console.log("Incorect input.");
		num = 0;
		break;
	}
	numOptions = 3 * num;
	console.log(numOptions);
	startGame();
}

// setting default
difficulty(2);