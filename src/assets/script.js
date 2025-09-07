// Make the navbar sticky when scrolling
const nav = document.getElementById("navbar");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// Handle menu button clicks for mobile and desktop
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("overlay-menu-mobile");
const closeMobile = document.getElementById("menu-close-mobile");
const desktopMenu = document.getElementById("overlay-menu-desktop");
const closeDesktop = document.getElementById("menu-close-desktop");

// Open the menu
menuBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    // Show mobile menu
    mobileMenu.classList.remove("hidden");
    setTimeout(() => mobileMenu.classList.add("opacity-100"), 10);
  } else {
    // Show desktop menu
    desktopMenu.classList.remove("hidden");
    setTimeout(() => {
      desktopMenu.classList.add("opacity-100");
      desktopMenu.classList.remove("translate-x-full");
    }, 10);
  }
});

// Close the mobile menu
closeMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("opacity-100");
  setTimeout(() => mobileMenu.classList.add("hidden"), 300);
});

// Close the desktop menu
closeDesktop.addEventListener("click", () => {
  desktopMenu.classList.remove("opacity-100");
  desktopMenu.classList.add("translate-x-full");
  setTimeout(() => desktopMenu.classList.add("hidden"), 300);
});

// Close menus when clicking outside
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

// Close mobile menu when a link is clicked
const mobileNavLinks = mobileMenu.querySelectorAll("a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("opacity-100");
    setTimeout(() => mobileMenu.classList.add("hidden"), 300);
  });
});

// Lightbox for viewing images
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      // Show the lightbox with the clicked image
      lightbox.classList.remove("hidden");
      lightbox.classList.add("flex");
      lightboxImg.src = img.src;
    });
  });

  // Close the lightbox
  lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
  });
}

const toggleBtn = document.getElementById("social-toggle");
const popup = document.getElementById("social-popup");

toggleBtn.addEventListener("click", () => {
  popup.classList.toggle("hidden");
});

const homeSection = document.getElementById('home');
const cursorText = document.getElementById('cursor-text');

homeSection.addEventListener('mousemove', (e) => {
  cursorText.style.display = 'block';
  // Move cursor text slightly offset so it doesn't overlap pointer
  cursorText.style.transform = `translate3d(${e.clientX + 15}px, ${e.clientY + 15}px, 0)`;
});

homeSection.addEventListener('mouseleave', () => {
  cursorText.style.display = 'none';
});