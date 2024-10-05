/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

// Toggle menu and icon when hamburger is clicked
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});


// Close menu when a nav link is clicked
navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");

  });
});


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  // Show the scroll-up button after scrolling 250px
  if (window.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

// Listen for scroll events
window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.getElementById("navbar");

  // Show the scroll-up button after scrolling 250px
  if (window.scrollY >= 250) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};

// Listen for scroll events
window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(
  `.home__data , .about__top , .Popular__top,.review_top, .review__swiper , .footer__icon,.footer__content, .copy__right`
);
sr.reveal(`.home__image`, { delay: 500, scale: 0.5 });
sr.reveal(`.service__card, popular_card,`, { intervel: 100 });

sr.reveal(`.about__leaf`, { delay: 1000, origin: "right" });
sr.reveal(`.about__item__1-content , about__item__2-img`, { origin: "right" });

sr.reveal(`.about__item__2-content , about__item__1-img`, { origin: "left" });

sr.reveal(`.review__leaf, .footer__floral`, { delay: 1000, origin: "left" });
