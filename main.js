const btn = document.getElementById("hidden");
const mobileNav = document.getElementById("mobile-nav")

btn.addEventListener("click", function() {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex";
    }else {
        mobileNav.style.display = "none";
    }
    
});