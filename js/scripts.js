// Simple mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded"); // Debugging
    const menuToggle = document.getElementById("mobile-menu");
    const navUl = document.querySelector("nav ul");

    if (menuToggle && navUl) {
        menuToggle.addEventListener("click", function () {
            console.log("Menu button clicked"); // Debugging
            navUl.classList.toggle("showing");
             // Log to check if class is added
            console.log("Current nav classes:", navUl.classList);
        });
    } else {
        console.error("Menu toggle or nav ul not found");
    }
});
