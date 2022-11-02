document.addEventListener('DOMContentLoaded', ()=>{
    console.log ('hello')
 let allTheRectangles = document.querySelectorAll('.rectangle');
 console.log(allTheRectangles)

allTheRectangles.forEach((rectangle) => {
    rectangle.style.backgroundColor = 'yellow';
    rectangle.style.color = 'yellow';
    let border = (rectangle) => {
        rectangle.currentTarget.style.border = 'solid black'
    };

    rectangle.addEventListener('click',border)
})
});
