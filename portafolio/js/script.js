// typing effect

const words = [
"QA Analyst",
"QA Manual Tester",
"QA Automation Tester"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing").textContent =
currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;

if(i === words.length){
i = 0;
}
}

setTimeout(type,120);
}

type();


// animación scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(sec => {

const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
sec.classList.add("show");
}

});

});


// menu hamburguesa

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});