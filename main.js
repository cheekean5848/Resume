const toTop = document.querySelector(".to-top");

document.getElementById("date").innerHTML = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", function(event) {
    document.querySelector(".nav-bar").classList.toggle("active");
})

window.addEventListener("scroll", function(event) {
    if (this.window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})