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

const bars = document.querySelector(".bars");
const barsCheckBox  = document.querySelector("#toggle");

const formText = document.querySelector(".form-text");

function displayAliquam(event) {
    feugiatBtn.style.transform= "none";
    feugiatBtn.style.backgroundColor ="#DDDDDD";
    consequatBtn.style.transform= "none";
    consequatBtn.style.backgroundColor ="#DDDDDD";

    consequatDiv.style.display = "none";
    feugiatDiv.style.display = "none";
    aliuamDiv.style.display = "block";
    aliuamBtn.style.backgroundColor = "transparent";
    aliuamBtn.style.color = "#F5867A";
    consequatBtn.style.backgroundColor = "#DDDDDD";
    consequatBtn.style.color = "black";

    feugiatBtn.style.backgroundColor= "#DDDDDD";
    feugiatBtn.style.color= "black"

    aliuamBtn.style.outline = "0";
    aliuamBtn.style.borderBottom = "0";
    // aliuamBtn.style.paddingTop = "30px";
    // feugiatBtn.style.paddingTop= "1rem";
    // consequatBtn.style.paddingTop = "1rem";
    aliuamBtn.style.transform= "scaleY(1.3)";
    aliuamBtn.style.backgroundColor ="white";




    
    // aliuamBtn.style.backgroundColor = "white";

}
function displayConsequat(event) {
    feugiatBtn.style.transform= "none";
    feugiatBtn.style.backgroundColor ="#DDDDDD";
    aliuamBtn.style.transform= "none";
    aliuamBtn.style.backgroundColor ="#DDDDDD";

    consequatDiv.style.display = "block";
    feugiatDiv.style.display = "none";
    aliuamDiv.style.display = "none";
    aliuamBtn.style.backgroundColor = "#DDDDDD";
    aliuamBtn.style.color = "black";
    consequatBtn.style.backgroundColor = "transparent";
    consequatBtn.style.color = "#F5867A";
    feugiatBtn.style.backgroundColor= "#DDDDDD";
    feugiatBtn.style.color= "black";
    consequatBtn.style.outline = "0";
    consequatBtn.style.border = "1px solid #E3E3E3";
    // consequatBtn.style.paddingTop = "30px";
    // aliuamBtn.style.paddingTop = "1rem";
    // feugiatBtn.style.paddingTop= "1rem"
    consequatBtn.style.transform= "scaleY(1.3)";
    consequatBtn.style.backgroundColor ="white";
    consequatBtn.style.borderBottom = "0";
    

    // consequatBtn.style.backgroundColor = "white";
    

}
function displayFeugiat(event) {
    consequatBtn.style.transform= "none";
    consequatBtn.style.backgroundColor ="#DDDDDD";
    aliuamBtn.style.transform= "none";
    aliuamBtn.style.backgroundColor ="#DDDDDD";

    consequatDiv.style.display = "none";
    feugiatDiv.style.display = "block";
    aliuamDiv.style.display = "none";
    aliuamBtn.style.backgroundColor = "#DDDDDD";
    aliuamBtn.style.color = "black";
    consequatBtn.style.backgroundColor = "#DDDDDD";
    consequatBtn.style.color = "black";
    feugiatBtn.style.backgroundColor= "transparent";
    feugiatBtn.style.color= "#F5867A"
    // feugiatBtn.style.backgroundColor = "white";
    feugiatBtn.style.outline= "0";
    // feugiatBtn.style.paddingTop= "30px"
    // aliuamBtn.style.paddingTop = "1rem";
    // consequatBtn.style.paddingTop = "1rem";
    feugiatBtn.style.borderBottom = "0";
    feugiatBtn.style.transform= "scaleY(1.3)";
    feugiatBtn.style.backgroundColor ="white";
    // feugiatBtn.style.paddingBottom= 
    feugiatBtn.style.border = "1px solid #E3E3E3"
    
   

}

// function hideBar(event) {
//     if(barsCheckBox === checked ) {
//         event.target.style.display = "none";
//     } else {
//         event.target.style.display = "block";
//     }
// }
function handleName(event) {
    event.preventDefault();
}

aliuamBtn.addEventListener("click", displayAliquam);
consequatBtn.addEventListener("click", displayConsequat);
feugiatBtn.addEventListener("click", displayFeugiat)

formText.addEventListener("submit", handleName)