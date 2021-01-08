
window.addEventListener('load',() => {
    document.querySelector('.loader').classList.add('hide_loader');
});

AOS.init({
    easing: 'ease-in-out-sine',
    delay : 300,
    duration: 2000,
});

$('.owl-slider').owlCarousel({
    items : 1,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    animateOut: 'fadeOut'
});

// client section start here 
$('.owl-client').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
// client section end here 
// testimonials section start here 
$('.owl-testimonials').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
});
// testimonials section end here

// navbar section start here 
const navbar = document.querySelector('.navbar');
const topBtn = document.querySelector('.top_btn');

window.addEventListener('scroll',() => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
       navbar.classList.add('navbar_fixed');
    }else{
        navbar.classList.remove('navbar_fixed');
    }
    if(scrollHeight > 500){
        topBtn.classList.add('show_top_btn');
    }else{
        topBtn.classList.remove('show_top_btn');
    }
});
topBtn.addEventListener('click',() => {
    window.scrollTo({ left:0,top:0})
});
// navbar section end here 

// menu section start here 
const menuContain = document.querySelector('.menu');
// show menu 
document.querySelector('.logo_toggle').addEventListener('click',() => {
    menuContain.classList.add('show_navbar');
});
// hide menu 
document.querySelector('.close_menu').addEventListener('click',() => {
    menuContain.classList.remove('show_navbar');
});
menuContain.addEventListener('click',() => {
    menuContain.classList.remove('show_navbar');
});
// menu section end here 

// position section navbar  start here 
const scrollLinks = document.querySelectorAll('.menu_bar_item_links');
function colorLinks(){
    scrollLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
};
scrollLinks.forEach(item => item.addEventListener('click',colorLinks));

scrollLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        window.scrollTo({ left:0,top:position});
    });
});
// position section navbar end here 


const portfolioTag = document.querySelectorAll('.tab_item');
const tabBox = document.querySelectorAll('.tab_box');
portfolioTag.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        let category = e.currentTarget.dataset.id;
        tabBox.forEach((tabitem)=>{
            if(category === tabitem.id){tabitem.style.display ="block"; }
            if(category !== tabitem.id){ tabitem.style.display ="none" }
            if(category === "all"){ tabitem.style.display = "block"}
        })
    })
})
