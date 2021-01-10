var container = document.querySelector("#container");

for (var i = 1; i <= 30; i++) {
	var buttonsContainer = document.createElement("button");
	buttonsContainer.innerText = i;
	container.appendChild(buttonsContainer);
	buttonsContainer.classList.add("buttonsContainer");
};

var colorChoice = ["", "black"];
var colorIndex  = 0;

for (var i = 0; i < 3; i++) {
	colorChoice.push(prompt("Voer de kleuren die je in de array wilt stoppen"));
	}
console.log(colorChoice);

document.querySelector("#container").addEventListener("click", function(e) {
	var selectedButton = e.target;
	selectedButton.style.backgroundColor = colorChoice[colorIndex];
	colorIndex = (colorIndex +1) % colorChoice.length;
		
		if (colorIndex == 3) {
		var selectedButton = e.target;
		selectedButton.style.display = "none";
		}
}); 
	
	



