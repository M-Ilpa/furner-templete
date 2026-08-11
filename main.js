const btn = document.getElementById("nav-icon");
const mobileNav = document.getElementById("mobile-nav");
const wholeScreen =document.getElementById("box");

btn.addEventListener("click", function(event) {
    event.stopPropagation();
    if (mobileNav.style.display !== "flex") {
        mobileNav.style.display = "flex";
        wholeScreen.style.pointerEvents = "auto";
    }else {
        mobileNav.style.display = "none";
        wholeScreen.style.pointerEvents = "auto";
    }
    
});
wholeScreen.addEventListener("click", function() {
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
        wholeScreen.style.pointerEvents = "none";
    }
});