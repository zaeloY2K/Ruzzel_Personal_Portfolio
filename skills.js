// =========================
// PAGE NAVIGATION
// =========================

window.scrollTo(0, 0);

const links = document.querySelectorAll(".nav-links a");

function navigate(url) {

    const skillsPage = document.querySelector(".skills-page");

    // Slide current page UP
    skillsPage.classList.add("page-exit");

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