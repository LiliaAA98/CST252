/**
 * Author:   Lilia Alvarez
 * Created:   9.28.2022
 * 
 * (c) Media Scripting FALL22
 **/
function ready(){
    let outputEl = document.querySelector("#output")
   let oneEl=document.createElement("button")
   let twoEl= document.createElement("button")

  let parent = document.querySelector("#output")
  parent.appendChild(oneEl)
oneEl.textContent= 'BUTTON';
oneEl.style.color= 'green'

parent.appendChild(twoEl)
twoEl.textContent= 'BUTTON';
twoEl.style.backgroundColor = 'pink'
twoEl.style.color= 'white'

}