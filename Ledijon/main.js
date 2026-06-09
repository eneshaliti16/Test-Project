const form = document.getElementById("contactForm");
const success = document.getElementById("success");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        name === "" ||
        surname === "" ||
        email === "" ||
        message === ""
    ) {
        error.style.display = "block";
        error.textContent = "Please fill in all fields.";
        success.style.display = "none";
        return;
    }

    if (!emailPattern.test(email)) {
        error.style.display = "block";
        error.textContent = "Please enter a valid email.";
        success.style.display = "none";
        return;
    }

    error.style.display = "none";
    success.style.display = "block";
    success.textContent = "Message sent successfully!";

    form.reset();

    setTimeout(() => {
        success.style.display = "none";
    }, 3000);
});