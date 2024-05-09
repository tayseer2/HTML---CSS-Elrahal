// Scroll To Top
let btn = document.querySelector(".scrole-to-top");
window.onscroll = function () {
    if (window.scrollY >= 650) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
window.onload = function () {
    btn.style.display = "none";
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Popup 
let popDiv = document.querySelector(".popup");
let popBtn = document.querySelector(".btn");
setTimeout(shwoPopUP, 5000)
function shwoPopUP() {
    popDiv.style.display = "block"
}

popBtn.onclick = function () {
    popDiv.remove()
}

// counter   
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let count = setInterval(counter, 1000)
function counter() {
    seconds.innerHTML -= 1
    if (seconds.innerHTML < "0") {
        minutes.innerHTML -= 1;
        seconds.innerHTML = 59;
    } 
     if (minutes.innerHTML < "0") {
        hours.innerHTML -= 1;
        minutes.innerHTML = 59;
    }
    if (hours.innerHTML < "0") {
        days.innerHTML -= 1;
        hours.innerHTML = 23;
    }
    if (seconds.innerHTML === "0" && minutes.innerHTML === "0" && hours.innerHTML === "0" && days.innerHTML === "0") {
        clearInterval(count)
    }
}

// progress

let prog1 = document.querySelector(".prog1");
let prog2 = document.querySelector(".prog2");
let prog3 = document.querySelector(".prog3");
let prog4 = document.querySelector(".prog4");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 7350) {
        prog1.style.width = "80%";
        prog2.style.width = "85%";
        prog3.style.width = "70%";
        prog4.style.width = "65%";
    }
})
