'use strict'

const NotificationDiv = document.querySelector(".notification");


const NotificationRender = (InputObject) => {

    const topPosition = InputObject.top;
    const leftPosition = InputObject.top;
    NotificationDiv.setAttribute('style', `top:${topPosition}px; left:${leftPosition}px;`)
    NotificationDiv.innerHTML = InputObject.html
    NotificationDiv.classList.add = InputObject.className

}






NotificationRender({
    top: +prompt("Enter top position"),
    left: +prompt("Enter left position"),
    html: prompt("What you wann say?"),
    className: "welcome"
})