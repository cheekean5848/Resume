document.getElementById("date").innerHTML = new Date().getFullYear()

const navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0";
    // document.getElementsByTagName("html")[0].style.overflow = "hidden"
}

function hideMenu() {
    navLinks.style.right = "-200px"
    // document.getElementsByTagName("html")[0].style.overflowY = "scroll"
    // document.getElementsByTagName("html")[0].style.overflowX = "hidden"
}