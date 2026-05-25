function openPlanet(name, text) {
  document.getElementById("popup-title").innerText = name;
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
function createStars(count = 150) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.opacity = Math.random();

    star.style.animation = `twinkle ${1 + Math.random() * 3}s infinite alternate`;

    document.body.appendChild(star);
  }
}

createStars();

function setupMenuToggle() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('nav');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.type = 'button';

  toggleBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupMenuToggle);
} else {
  setupMenuToggle();
}

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";
    bigImg.style.borderRadius = "10px";

    overlay.appendChild(bigImg);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  });
});
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (!slides || slides.length === 0) return;
  slides.forEach(slide => slide.classList.remove("active"));
  const s = slides[index];
  if (s) s.classList.add("active");
}

function nextSlide() {
  if (!slides || slides.length === 0) return;
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

function prevSlide() {
  if (!slides || slides.length === 0) return;
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
}

// auto slideshow (only if slides exist)
if (slides && slides.length > 0) {
  setInterval(() => {
    nextSlide();
  }, 5000);
}

