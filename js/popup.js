const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const buttons = document.querySelectorAll(".popup-button");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTechnologies = document.getElementById("modalTechnologies");
const modalGithub = document.getElementById("modalGithub");
const modalLive = document.getElementById("modalLive");

const projectData = {
    cottage: {
        img: "img/portfolio/1.webp",
        title: "Pondok Umaru Cottage",
        desc: "I created this project as my final school assignment. It was a challenge to build something independently, and I chose to develop a web application for a cottage business.",
        tech: ["img/skill/bootstrap.svg", "img/skill/php.svg"],
        github: "#",
        live: "#",
    },
    misstea: {
        img: "img/portfolio/2.webp",
        title: "Miss Tea Shop",
        desc: "I made this website as part of an exercise to improve my knowledge of HTML, CSS, and JavaScript. I tried watching some videos and implementing the code as practice.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "#",
        live: "#",
    },
    // Tambah data lainnya sesuai kebutuhan
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = button.getAttribute("data-tab") || "misstea";
        const data = projectData[tab];
        if (!data) return;

        modalImage.src = data.img;
        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.desc;

        modalTechnologies.innerHTML = ""; // clear dulu
        data.tech.forEach((tech) => {
            const img = document.createElement("img");
            img.src = tech;
            img.alt = "Tech Logo";
            img.className = "w-10 h-10"; // sesuaikan styling
            modalTechnologies.appendChild(img);
        });

        modalGithub.href = data.github;
        modalLive.href = data.live;

        modal.classList.remove("hidden");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});