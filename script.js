let myCircle = document.querySelector(".circle-nav");
let openNav = document.querySelector(".fa-align-justify");
let closeNav = document.querySelector(".fa-times");
let myContainer = document.querySelector(".container");
let myMenu = document.querySelector("nav");
let li_1 = document.querySelector("nav li:nth-child(2)");
let li_2 = document.querySelector("nav li:nth-child(3)");

openNav.onclick = ()=> {
    
    myCircle.classList.add("rotate-circle");
    myCircle.style.position = "absolute";
    myContainer.classList.add("rotate-container");
    myMenu.classList.add("show-menu");
    li_1.style.marginLeft = "15px";
    li_2.style.marginLeft = "30px";
}

closeNav.onclick = ()=> {
    
    myCircle.classList.remove("rotate-circle");
    myCircle.style.position = "fixed";
    myContainer.classList.remove("rotate-container");
    li_1.style.marginLeft = "0";
    li_2.style.marginLeft = "0";
    myMenu.classList.remove("show-menu");
}

