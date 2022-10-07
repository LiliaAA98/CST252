function flowerFunction() {
	//initialize();
	
	//YOUR CODE GOES RIGHT HERE 


	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();
		


}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}