// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");

    window.onscroll = function () {
        const top = window.scrollY;

        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Function to dynamically create skills from the JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");

    row.classList.add("row");

    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item, index) => {
                const card = document.createElement("div");

                card.classList.add("col-12", "col-md-6", "col-lg-4", "mt-4");

                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img
                                src="./images/${item.image}"
                                alt="Illustration de la compétence ${item.title}"
                                loading="lazy"
                            >
                            <h3 class="card-title mt-3">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                row.appendChild(card);

                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        })
        .catch((error) => {
            console.error("Erreur lors du chargement des compétences :", error);
        });
}

// Function to dynamically create projects from the JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");

    row.classList.add("row");

    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item, index) => {
                const card = document.createElement("div");

                card.classList.add("col-lg-4", "mt-4");

                card.innerHTML = `
                    <div class="card portfolioContent">
                        <img
                            class="card-img-top"
                            src="images/${item.image}"
                            alt="Aperçu du projet ${item.title}"
                            loading="lazy"
                            style="width: 100%;"
                        >

                        <div class="card-body">
                            <h3 class="card-title">${item.title}</h3>

                            <p class="card-text">${item.text}</p>

                            <div class="text-center">
                                <a
                                    href="${item.link}"
                                    class="btn btn-success"
                                    aria-label="Consulter le projet ${item.title}"
                                >
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    </div>
                `;

                row.appendChild(card);

                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        })
        .catch((error) => {
            console.error("Erreur lors du chargement des projets :", error);
        });
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();