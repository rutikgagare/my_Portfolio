
// for hamburger
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'},350);
        document.querySelector('.ham').style.display='none';
    }
})

// light and dark mode
var z = document.getElementById("btn");
var p = document.getElementById("change_mode");

function Dark(){
    z.style.left="70px";
    p.style.background="black";
    p.style.color="white";   
 }
 
function Light(){
    z.style.left="0";
    p.style.backgroundColor="white";
    p.style.color="black";  
 }

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = 'none';
})

// auto typing
var typed = new Typed(".auto",{
    strings:["Developer","Programmer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})








