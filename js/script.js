
// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('opacity-0', 'bta-hide');
        toTop.classList.add('flex', 'bta-active');
        // toTop.classList.add('bta-active');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex', 'bta-active');
        toTop.classList.add('opacity-0', 'bta-hide');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Out Hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const allPaths = document.querySelectorAll('.photo-reveal path');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';

        allPaths.forEach(path => path.style.stroke = "white");
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';

        allPaths.forEach(path => path.style.stroke = "black");
    }
});

// Move Toggle Mode
if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    darkToggle.checked = true;
    html.classList.add('dark');
    allPaths.forEach(path => path.style.stroke = "white");
} else {
    darkToggle.checked = false;
    html.classList.remove('dark');
    allPaths.forEach(path => path.style.stroke = "black");
}

// Intersection Observer
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove('text-primary', 'dark:font-bold', 'dark:text-shadow');
                });

                if (activeLink) {
                    activeLink.classList.add('text-primary', 'dark:font-bold', 'dark:text-shadow');
                }
            }
        });
    },
    {
        threshold: 0.3,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Image Reveal
allPaths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = "none";
    path.getBoundingClientRect(); // Trigger layout
    path.style.transition = "stroke-dashoffset 3s ease-in-out";
    path.style.strokeDashoffset = "0";
});

// Typewriter
const title = document.querySelector("#title");
const typewritter = new Typewriter(title, {
    loop: true,
    cursor: '|',
});

typewritter
    .typeString("<strong>Frontend</strong> Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("<strong>Backend</strong> Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("<strong>UI/UX</strong> Designer")
    .pauseFor(2000)
    .start();

// Trafic
const redLight = document.querySelector(".red-light");
const yellowLight = document.querySelector(".yellow-light");
const greenLight = document.querySelector(".green-light");

function turnOffAll() {
    redLight.style.opacity = 0.3;
    yellowLight.style.opacity = 0.3;
    greenLight.style.opacity = 0.3;
}

function turnOn(element) {
    element.style.opacity = 1;
}

let index = 0;
const lights = [redLight, yellowLight, greenLight];

turnOffAll();

setInterval(() => {
    turnOffAll();
    turnOn(lights[index]);
    index = (index + 1) % lights.length;
}, 1000);

// Skills About
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const tabIcons = document.querySelectorAll(".fa-caret-up");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const isActive = btn.classList.contains("active");
        const tabId = btn.getAttribute("data-tab");
        const tabContent = document.getElementById(tabId);
        const icon = btn.querySelector(".fa-caret-up");

        tabButtons.forEach((b) => b.classList.remove("active"));
        tabContents.forEach((c) => {
            c.classList.add("hidden");
            c.classList.remove("tab-content-animate");
            c.classList.remove("tab-content-animate-close");
        });
        tabIcons.forEach((i) => i.classList.remove("rotate-180"));

        if (!isActive) {
            btn.classList.add("active");
            tabContent.classList.remove("hidden");
            tabContent.classList.add("tab-content-animate");
            tabContent.classList.remove("tab-content-animate-close");
            icon.classList.add("rotate-180");
        }
    });
});

// Email Js
(function () {
    emailjs.init("-IT7wRUVFMBEtF-Sy"); // Ganti dengan Public Key dari EmailJS
})();
document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah form reload

        emailjs.sendForm("service_gw3svwl", "template_aixx3hp", this).then(
            function (response) {
                Toastify({
                    text: "✅ Pesan berhasil dikirim!",
                    duration: 1500,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#22c55e",
                }).showToast();
                document.getElementById("contact-form").reset(); // Reset form
                history.replaceState(null, "", window.location.href);
            },
            function (error) {
                Toastify({
                    text: "❌ Gagal mengirim pesan. Silakan coba lagi.",
                    duration: 1500,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#ef4444",
                }).showToast();
            }
        );
    });