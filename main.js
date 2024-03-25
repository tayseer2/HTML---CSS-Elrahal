// Scroll To Top
let btn = document.querySelector(".scrole-to-top");
window.onscroll = function () {
    if (window.scrollY >= 600) {
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
