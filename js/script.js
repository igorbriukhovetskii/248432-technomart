"use strict";

var writeUsOpen = document.querySelector("#write-us");
var popupWriteUs = document.querySelector(".write-us");
var overlay = document.querySelector(".overlay");
var writeUsClose = popupWriteUs.querySelector(".modal-window-close-btn");
var writeUsForm = popupWriteUs.querySelector("form");
var writeUsName = popupWriteUs.querySelector("#write-us-name");
var writeUsMail = popupWriteUs.querySelector("#write-us-mail");
var writeUsText = popupWriteUs.querySelector("#write-us-text");
var map = document.querySelector("#map");
var mapPopup = document.querySelector(".map-popup");
var closeMapPopup = mapPopup.querySelector("#map-close");
var addItem = document.querySelectorAll(".buy");
var cartPlus = document.querySelector(".cart-plus");
var cartPlusClose = cartPlus.querySelector(".modal-window-close-btn");
var cartContinueShopping = cartPlus.querySelector("#cart-popup-close");

writeUsOpen.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("default prevented");
    overlay.classList.add("show-overlay");
    popupWriteUs.classList.add("show-content");
    if (localStorage.getItem("writeUsName")) {
        writeUsName.value = localStorage.getItem("writeUsName");
        writeUsMail.focus();
    } else {
        writeUsName.focus();
    }
    if (localStorage.getItem("writeUsMail")) {
        writeUsMail.value = localStorage.getItem("writeUsMail");
        writeUsText.focus();
    } else {
        writeUsName.focus();
    }

});

/*Управление формой обратной связи*/
writeUsClose.addEventListener("click", function (event) {
    event.preventDefault();
    popupWriteUs.classList.remove("show-content");
    overlay.classList.remove("show-overlay");
    popupWriteUs.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!writeUsName.value || !writeUsMail.value) {
        popupWriteUs.classList.remove("modal-error");
        popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
        popupWriteUs.classList.add("modal-error");
    } else {
        localStorage.setItem("writeUsName", writeUsName.value);
        localStorage.setItem("writeUsMail", writeUsMail.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27 && popupWriteUs.classList.contains("show-content")) {
        popupWriteUs.classList.remove("show-content");
        overlay.classList.remove("show-overlay");
        popupWriteUs.classList.remove("modal-error");
    }
});

/*Управление всплывающим окном интерактивной карты*/
map.addEventListener("click", function (event) {
   event.preventDefault();
   overlay.classList.add("show-overlay");
   mapPopup.classList.add("show-content");
});

closeMapPopup.addEventListener("click", function (event) {
   event.preventDefault();
   mapPopup.classList.remove("show-content");
   overlay.classList.remove("show-overlay");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27 && mapPopup.classList.contains("show-content")) {
        mapPopup.classList.remove("show-content");
        overlay.classList.remove("show-overlay");
    }
});

/*Управление всплывающим окном добавления товара в корзину*/
window.addEventListener("load", function() {
    for (var i = 0; i < addItem.length; i++) {
        addItem[i].addEventListener("click", function (event) {
            event.preventDefault();
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

cartContinueShopping.addEventListener("click", function (event) {
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







