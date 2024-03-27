// Scroll To Top
let btn = document.querySelector(".scrole-to-top");
window.onscroll = function () {
    if (window.scrollY >= 650) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


let popDiv = document.querySelector(".popup");
let popBtn = document.querySelector(".btn");


setTimeout(shwoPopUP, 5000)
function shwoPopUP() {
    popDiv.style.display = "block"
}

popBtn.onclick = function () {
    popDiv.remove()
}


