function getRandomInt() {
  return Math.floor(Math.random() * 100);
}


document.addEventListener('DOMContentLoaded', () => {
	let randomNumber = getRandomInt();
	document.querySelector('#secretNumber').textContent = randomNumber;


let inputBox = document.querySelector('#inputBox');
let feedback = document.querySelector('.feedback') 
let checkNumber = (e)=>{

	let userInput =+e.currentTarget.value 
	 if (userInput === randomNumber){
		console.log("that's the number");
		feedback.textContent = "thats the number"
	}
	else if(userInput < randomNumber){
		console.log("thats too small")
		feedback.textContent = "thats too small"
	}
	else {
		console.log("thats too big")
		feedback.textContent = "thats too big"
	}
	
};
inputBox.addEventListener('input', checkNumber)
})