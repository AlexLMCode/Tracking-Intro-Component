/*Defining the elements*/
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');


menuBtn.addEventListener('click', (event) => {

    if (event.target.attributes[0].nodeValue === "./images/icon-hamburger.svg") {
        event.target.attributes[0].nodeValue = "./images/icon-close.svg";
    } else {
        event.target.attributes[0].nodeValue = "./images/icon-hamburger.svg"
    }
    menu.classList.toggle("toggle");
})
