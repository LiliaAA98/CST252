document.addEventListener("DOMContentLoaded", () => {



	let box = document.querySelector('.box');
	
	let boxHover = (e) => {
		box.classList.add('box-end-frame', 'fadeInAnimation');
		
	}

	box.addEventListener('mouseover', boxHover);

//heading.addeventlistener
let heading = document.querySelector('.heading');
let headingHover = (e)=>{
    heading.classList.add('heading-end-frame', 'fadeInAnimation');
}
// when mouseover is activated it turns the heading box fade in to purple
heading.addEventListener('mouseover',headingHover);


});