const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });

});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.style.color = "#16a34a";
    formMessage.textContent =
        "Thank you! Your enquiry has been recorded.";

    contactForm.reset();

});

document.getElementById("year").textContent =
    new Date().getFullYear();
