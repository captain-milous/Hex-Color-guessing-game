let numOptions = 0;
let Options = [];
let wantedHexColor = "#000000";

function rndHexColor() {
	let hexColor = "#";
	for(let i = 0; i < 3; i++) {
		let random = Math.floor(Math.random() * 256);
		let hexStr = random.toString(16);
		if(random < 10 && random != 0) {
			hexStr = "0"+hexStr;
		} else if(random == 0) {
			hexStr = "00";
		} else {
			hexStr = random.toString(16);
		}		
		hexColor = hexColor + hexStr;
	}
	return hexColor.toUpperCase();
}

function startGame() {
	document.body.style.background = "white";
	document.getElementById("message").innerHTML = "";
	document.getElementById("container-hexColor").style.display = "block";
	document.getElementById("container-diff").style.display = "block";
	document.getElementById("restart").style.display = "none";

	Options = [];
	for (var i = 0; i < numOptions ; i++) {
		Options.push(rndHexColor());
	}
	console.log(Options);
	wantedHexColor = Options[Math.floor(Math.random() * (numOptions - 1))];
	document.getElementById("wantedHexColor").innerHTML = wantedHexColor;
	let output = "";
	for (var i = 0; i < numOptions ; i++) {
		output = output + '<button class="btn-hexColor" id="'+"item-"+i+'" onclick="guess('+i+')"></button>';
	}
	document.getElementById("container-hexColor").innerHTML = output;
	for (var i = 0; i < numOptions ; i++) {
		document.getElementById('item-'+i).style.backgroundColor = Options[i];
	}
}

function reset() {	
	startGame();
}

function guess(num) {
	console.log(num)
	let guessHexColor = Options[num];
	if(wantedHexColor == guessHexColor){
		document.getElementById("container-hexColor").style.display = "none";
		document.getElementById("container-diff").style.display = "none";
		document.getElementById("restart").style.display = "inline-block";
		document.getElementById("message").innerHTML = "CORRECT!";
		document.body.style.background = wantedHexColor;
	} else {
		document.getElementById('item-'+num).style.display = "none";
		document.getElementById("message").innerHTML = "TRY AGAIN. THAT COLOR WAS " + Options[num];
	}
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