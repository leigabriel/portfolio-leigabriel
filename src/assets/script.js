// Sticky Navbar Scroll Effect
const nav = document.getElementById("navbar");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
}

const menuBtn = document.getElementById("menu-toggle");

const mobileMenu = document.getElementById("overlay-menu-mobile");
const closeMobile = document.getElementById("menu-close-mobile");

const desktopMenu = document.getElementById("overlay-menu-desktop");
const closeDesktop = document.getElementById("menu-close-desktop");

// Open menu
menuBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    // Mobile
    mobileMenu.classList.remove("hidden");
    setTimeout(() => mobileMenu.classList.add("opacity-100"), 10);
  } else {
    // Desktop
    desktopMenu.classList.remove("hidden");
    setTimeout(() => {
      desktopMenu.classList.add("opacity-100");
      desktopMenu.classList.remove("translate-x-full");
    }, 10);
  }
});

// Close Mobile
closeMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("opacity-100");
  setTimeout(() => mobileMenu.classList.add("hidden"), 300);
});

// Close Desktop
closeDesktop.addEventListener("click", () => {
  desktopMenu.classList.remove("opacity-100");
  desktopMenu.classList.add("translate-x-full");
  setTimeout(() => desktopMenu.classList.add("hidden"), 300);
});

// Close menu when clicking outside or on the nav
const closeMenu = (event) => {
  if (mobileMenu && !mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    mobileMenu.classList.remove("opacity-100");
    setTimeout(() => mobileMenu.classList.add("hidden"), 300);
  }

  if (desktopMenu && !desktopMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    desktopMenu.classList.remove("opacity-100");
    desktopMenu.classList.add("translate-x-full");
    setTimeout(() => desktopMenu.classList.add("hidden"), 300);
  }
};

document.addEventListener("click", closeMenu);

// Close mobile menu when clicking a nav link
const mobileNavLinks = mobileMenu.querySelectorAll("a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("opacity-100");
    setTimeout(() => mobileMenu.classList.add("hidden"), 300);
  });
});

// Lightbox Functionality
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightbox.classList.add("flex");
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
  });
}

// Tooltip
document.addEventListener("DOMContentLoaded", function () {
  const profileDiv = document.querySelector(".group.relative.overflow-hidden");
  const tooltip = document.getElementById("profile-tooltip");

  if (profileDiv && tooltip) {
    profileDiv.addEventListener("mousemove", (e) => {
      const rect = profileDiv.getBoundingClientRect();
      tooltip.style.left = `${e.clientX - rect.left}px`;
      tooltip.style.top = `${e.clientY - rect.top}px`;
      tooltip.style.opacity = 1;
    });

    profileDiv.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  }
});

// Typing Animation
document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("typed-name");
  if (!target) return;

  const staticChar = "L";
  const rest = "ei GabrieL";
  let i = 0;
  let isDeleting = false;

  function type() {
    target.textContent = staticChar + rest.slice(0, i);

    if (!isDeleting) {
      if (i < rest.length) {
        i++;
        setTimeout(type, 80);
      } else {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1200);
      }
    } else {
      if (i > 0) {
        i--;
        setTimeout(type, 40);
      } else {
        isDeleting = false;
        setTimeout(type, 600);
      }
    }
  }

  type();
});

// Get elements
const btn = document.getElementById('heart-btn');
const container = document.getElementById('heart-container');
const count = document.getElementById('heart-count');

// Load heart count from localStorage
let heartCount = parseInt(localStorage.getItem('heartCount')) || 0;
count.textContent = heartCount;

btn.addEventListener('click', () => {
  heartCount++;
  count.textContent = heartCount;

  // Save to localStorage
  localStorage.setItem('heartCount', heartCount);

  // Create a popup heart
  const heart = document.createElement('div');
  heart.classList.add('heart-popup');
  heart.textContent = '❤️';
  heart.style.left = (Math.random() * 40 - 20) + 'px';
  container.appendChild(heart);

  heart.addEventListener('animationend', () => heart.remove());
});
