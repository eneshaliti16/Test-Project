document.addEventListener("DOMContentLoaded", function () {

    const burger = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    burger.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

});
