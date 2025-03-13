// Simple mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded"); // Debugging
    const menuToggle = document.getElementById("mobile-menu");
    const navUl = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            console.log("Menu button clicked"); // Debugging
            navUl.classList.toggle("showing");
        });
    } else {
        console.error("Menu toggle not found");
    }
});
