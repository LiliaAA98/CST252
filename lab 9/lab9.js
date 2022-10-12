document.addEventListener('DOMContentLoaded', () => { //content//}

let button1 = document.querySelector (“#btn1”);

let handler1 = (e) => {
	console.log(“you clicked!”);
	console.log(e);
	e.target.style.backgroundColor = “pink”;
}

button1.addEventListner(“click”, handler1);


let button2 = document.querySelector(“#btn2”);

let handler2 = (e) => {
	console.log(you clicked again!”);
	console.log(e);
	e.target.style.backgroundColor = “lightgreen”;
}

button2.addEventListner(“mouseover”, handler2);
});
