"use strict"
/* ----------------- BURGER-MENU ----------------- */
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    IOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add("_touch");
} else {
    document.body.classList.add("_pc");
}

/*
const iconMenu = document.querySelector(".menu_icon");
if (iconMenu) {
    const menuConteiner = document.querySelector(".header__container");
    const menuBody = document.querySelector(".header_menu");
    const menuLogo = document.querySelector(".header_logo_hidden");
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuLogo.classList.toggle('_active');
        menuConteiner.classList.toggle('_active');
    });
}
*/
const iconMenu = document.querySelector(".menu_icon");
var elements = ['.header__container', '.header_menu', '.header_logo_hidden', '.menu_icon'];
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        for (var i = 0; i < elements.length; i++) {
            var item;
            item = document.querySelector(elements[i]);
            item.classList.toggle("_active");
        }
    });

}
/* ----------------- BURGER-MENU ----------------- */

/* ----------------- SLIDER ----------------- */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* ----------------- SLIDER ----------------- */