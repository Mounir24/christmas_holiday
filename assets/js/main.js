/*==================SHOW MENU=============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // Validate the variables exist
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            // We add --> Show-menu <-- class
            nav.classList.toggle("show-menu");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

/*=========== Remove Menu Mobile============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==============SHOW SCROLL TOP ================*/
const scrollTop = () => {
    const scrollTop = document.getElementById("scroll-top");
    // When the scoll is higher than 560 viewpport , add -- show-scroll class
    if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
};

document.addEventListener("scroll", scrollTop);

// Go to Top
let scrollBtn = document.getElementById("scroll-top");

scrollBtn.addEventListener("click", function() {
    //window.scrollTo(0, 0);

    $("html, body").animate({ scrollTop: 0 }, "slow");
});

/*===========CHANGE HEADER BACKGROUND=============*/
function scrollHeader() {
    const nav = document.getElementById("header");
    //When the scroll is greater than 200 viewport add -- scroll-header class.
    if (this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*============== SCROLL SECTIONS ACTIVE LINK =================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*============ DARK LIGHT THEME MODE ==============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Previousley selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current  theme that the interface has by validaing the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ?
    "bx-toggle-left" :
    "bx-toggle-right";

// We validate if the user previousley chose a topic
if (selectedTheme) {
    // if the validation is fullfiled , we ask what the issue was know we activated or desactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    document.body.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / desactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*======== TITLT PARALAX EFFECT =============*/

$(document).ready(function() {
    $("button").tilt({
        perspective: true,
        easeing: "cubic-bezier(.03,.98,.52,.99)",
        glare: true,
        transition: true,
        maxGlare: 0,
        speed: 100,
    });
});

/*========= SCROLL REVEAL ANIMATIONS ========*/
/*const sr = ScrollRveal({
    distance: "30px",
    duration: 1000,
    reset: true,
});

sr.reveal(
    ".home__data",
    ".home__img",
    ".decoration__data",
    ".accessory__content",
    ".footer__content", {
        origin: top,
        interval: 200,
    }
);
sr.reveal(".share__img", ".send__content", {
    origin: "left",
});

sr.reveal(".share__data", ".send__img", {
    origin: "right",
});*/

ScrollReveal().reveal(".home__img", {
    reset: true,
    distance: "80px",
    duration: 1000,
    origin: "top",
    interval: 200,
});

ScrollReveal().reveal(".home__data", {
    reset: true,
    distance: "80px",
    duration: 1800,
    origin: "right",
    interval: 500,
});

ScrollReveal().reveal(".decoration__data", {
    reset: true,
    distance: "70px",
    origin: "left",
    duration: 1200,
    interval: 200,
});

ScrollReveal().reveal(".accessory__content", {
    reset: true,
    distance: "70px",
    origin: "top",
    duration: 1800,
    interval: 200,
});

ScrollReveal().reveal(".footer__content", {
    reset: true,
    distance: "80px",
    origin: "right",
    duration: 1800,
    interval: 200,
});

ScrollReveal().reveal(".share__img", {
    reset: true,
    distance: "80px",
    origin: "right",
    duration: 1800,
    interval: 200,
});

ScrollReveal().reveal(".send__content", {
    reset: true,
    distance: "80px",
    origin: "left",
    duration: 1200,
    interval: 200,
});

ScrollReveal().reveal(".share__data", {
    reset: true,
    distance: "80px",
    duration: 1000,
    origin: "left",
    interval: 200,
});
ScrollReveal().reveal(".send__img", {
    reset: true,
    distance: "80px",
    duration: 1800,
    origin: "right",
    interval: 200,
});