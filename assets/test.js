// header background change
let header = document.querySelector(".header");
function changeColor(event) {
    if(window.scrollY > 550) {
        header.style.background = "#F68F84";
    } else {
        header.style.background = "transparent"
    }
}
window.addEventListener("scroll", changeColor);

// service

const aliuamBtn = document.querySelector(".aliuamBtn");
const consequatBtn = document.querySelector(".consequatBtn");
const feugiatBtn = document.querySelector(".feugiatBtn");

const aliuamDiv = document.querySelector(".aliuamDiv");
const consequatDiv = document.querySelector(".consequatDiv");
const feugiatDiv = document.querySelector(".feugiatDiv");
const customAliquam = document.querySelector(".custom-aliquam");
const  customConsequat = document.querySelector(".custom-consequat");
const customFeugiat = document.querySelector(".custom-feugiat");

function displayAliquam(event) {
    consequatDiv.style.display = "none";
    feugiatDiv.style.display = "none";
    aliuamDiv.style.display = "block";
    // aliuamBtn.style.backgroundColor = "white";

}
function displayConsequat(event) {
    consequatDiv.style.display = "block";
    feugiatDiv.style.display = "none";
    aliuamDiv.style.display = "none";
    // consequatBtn.style.backgroundColor = "white";
    

}
function displayFeugiat(event) {
    consequatDiv.style.display = "none";
    feugiatDiv.style.display = "block";
    aliuamDiv.style.display = "none";
    // feugiatBtn.style.backgroundColor = "white";

}
aliuamBtn.addEventListener("click", displayAliquam);
consequatBtn.addEventListener("click", displayConsequat);
feugiatBtn.addEventListener("click", displayFeugiat)


