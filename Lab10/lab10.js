//1. one of the course boxes
//2 mouseover
//3 the color of the box changes

document.addEventListener('DOMContentLoaded', ()=> {
//1.one of the course boxes 
//2. mouseout
//3. the box goes back to the way it was before

//1.the course box
//2. click
//3.info panel shows up
//update course name, description and picture
let button =document.querySelector(".itembox");

let highLightBox = (e) =>{
    button.style.border = 'thick solid grey';
};
let off = (e) => {
    button.style.border = 'thin solid grey';
};
button.addEventListener("mouseover", highLightBox);
button.addEventListener("mouseout", off);
//what you do when the info panel opens (process)
let showPanel = (e) => {
    let panel = document.querySelector("#infopanel");
        console.log(panel)
        panel.style.display = 'block'; 
//display none makes it disappear
    let courseName = document.querySelector('#courseName')
         console.log(courseName);
          courseName.textContent = "CST 252"    
exitbutton.addEventListener('click',closePanel)
    let courseDescription = document.querySelector('#courseDescription');
        console.log(courseDescription);
        courseDescription.textContent = "Javascript Class"
}
//do the thing when you click it
button.addEventListener("click",showPanel);
//1. the exit button
//2. click 
//3. info panel disappears 

let exitButton = document.querySelector('#exitbutton').onclick
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
let closePanel = (e) =>{
    infopanel.style.display='none'
};
exitButton.addEventListener("click", closePanel)

});