// =========================
// STAR RATING
// =========================

const stars = document.querySelectorAll(".star");

console.log("Number of stars:", stars.length);

let selectedRating = 0;

stars.forEach(function(star) {

    // When mouse enters a star
    star.addEventListener("mouseenter", function() {

        const rating = Number(this.dataset.rating);

        stars.forEach(function(s) {

            const starRating = Number(s.dataset.rating);

            if (starRating <= rating) {
                s.classList.add("active");
            } else {
                s.classList.remove("active");
            }

        });

    });


    // When clicked
    star.addEventListener("click", function() {

        selectedRating = Number(this.dataset.rating);

        console.log("Selected rating:", selectedRating);

        stars.forEach(function(s) {

            const starRating = Number(s.dataset.rating);

            if (starRating <= selectedRating) {
                s.classList.add("active");
            } else {
                s.classList.remove("active");
            }

        });

    });

});


// When mouse leaves the rating
const ratingContainer = document.querySelector(".rating");

ratingContainer.addEventListener("mouseleave", function() {

    stars.forEach(function(star) {

        const starRating = Number(star.dataset.rating);

        if (starRating <= selectedRating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }

    });

});


// =========================
// PAGE NAVIGATION
// =========================

const links = document.querySelectorAll(".nav-links a");
const buttons = document.querySelectorAll(".primary-button, .secondary-button");

function navigate(url) {

    // ONLY slide the home content
    const homePage = document.querySelector(".home");

    homePage.classList.add("page-exit");

    setTimeout(function() {
        window.location.href = url;
    }, 700);
}


// Navbar links
links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const destination = this.href;

        navigate(destination);

    });

});


// Home page buttons
buttons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const destination = this.href;

        navigate(destination);

    });

});