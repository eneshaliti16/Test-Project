function showModel(model) {
    alert("Selected Model: " + model);
}

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");
    const showMoreBtn = document.getElementById("showMoreBtn");

    let expanded = false;

    // Hide cars after the first 8
    for (let i = 8; i < cards.length; i++) {
        cards[i].classList.add("hidden-car");
    }

    showMoreBtn.addEventListener("click", () => {

        if (!expanded) {
            // Show extra cars
            for (let i = 8; i < cards.length; i++) {
                cards[i].classList.remove("hidden-car");
            }

            showMoreBtn.textContent = "Shfaq më pak";
            expanded = true;

        } else {
            // Hide extra cars again
            for (let i = 8; i < cards.length; i++) {
                cards[i].classList.add("hidden-car");
            }

            showMoreBtn.textContent = "Shfaq më shumë";
            expanded = false;
        }

    });

});