let closer=document.querySelector('#closer');
closer.onclick=()=>{
    closer.style.display='none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    closer.style.display='block';
    navbar.classList.toggle('active');
}
function showSpecifications(id) {
    var specs = document.getElementById(id);
    if (specs.style.display === "none") {
        specs.style.display = "block";
    } else {
        specs.style.display = "none";
    }
}
let cart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>{
    closer.style.display='block';
    cart.classList.toggle('active');
}
let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    closer.style.display='block';
    loginForm.classList.toggle('active');
}
let searchForm=document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick=()=>{
    
    searchForm.classList.toggle('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
}
let slide=document.querySelectorAll('.home .slide-container .slide');
let index=0;
function next(){
    slide[index].classList.remove('active');
    index=(index+1)% slide.length;
    slide[index].classList.add('active');
}
function prev(){
    slide[index].classList.remove('active');
    index=(index-1 + slide.length)% slide.length;
    slide[index].classList.add('active');
}
