window.scrollTo(0,0);

const links = document.querySelectorAll(".nav-links a");

function naviagte(url) {
    const projectsPage = document.quesrySelector(".project-page");
     projectsPage.classList.add("page-exit");

     setTimeout(function () {
        window.location.href = url;
     }, 700);
}

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event,preventDefault();

        const destination = this.href;

        if (this.classList.contains("active")) {
            return;
        }

        naviagte(destination);
    
    });
});