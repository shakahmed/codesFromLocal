var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1Dispaly = document.querySelector("#p1Dispaly");
var p2Display = document.querySelector("p2Display");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winngingScore = 5;

p1button.addEventListener("click", function(){
	if(!gameOver){
	p1score++;
	if(p1score === winngingScore) {
		gameOver = true
	}

	p1Dispaly.textContent = p1score;
}});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
	p2score++;

	if(p2score === winngingScore) {
		gameOver = true;
	}
	p2Display.textContent = p2score;
}});

console.log(p2button);