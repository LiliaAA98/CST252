document.addEventListener('DOMContentLoaded', () => { //content//}
// The event is the click 
//the event is happening to the click here button 
//the button turns pink when the event is activated
let button1 = document.querySelector ('#btn1');

let handler1 = (e) => {
	console.log('you clicked!');
	console.log(e);
	e.target.style.backgroundColor = 'pink';
}

button1.addEventListener('click', handler1);

//the event for button 2 is the mouseover
//the event is happening to the dont click here button
//the button turns green when the event is activated
let button2 = document.querySelector('#btn2');

let handler2 = (e) => {
	console.log('you clicked again!');
	console.log(e);
	e.target.style.backgroundColor = 'lightgreen';
}

button2.addEventListener('mouseover', handler2);
});
