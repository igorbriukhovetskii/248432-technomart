"use strict"

var overlay = document.querySelector(".overlay");
var addItem = document.querySelectorAll(".buy");
var cartPlus = document.querySelector(".cart-plus");
var cartPlusClose = cartPlus.querySelector(".modal-window-close-btn");

window.addEventListener("load", function() {
    for (var i = 0; i < addItem.length; i++) {
        addItem[i].addEventListener("click", function (event) {
            event.preventDefault();
            console.log("buy clicked");
            overlay.classList.add("show-overlay");
            cartPlus.classList.add("show-content");
        });
    }
});
cartPlusClose.addEventListener("click", function (event) {
    event.preventDefault();
    cartPlus.classList.remove("show-content");
    overlay.classList.remove("show-overlay");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27 && mapPopup.classList.contains("show-content")) {
        cartPlus.classList.remove("show-content");
        overlay.classList.remove("show-overlay");
    }
});