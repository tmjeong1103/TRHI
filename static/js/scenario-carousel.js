"use strict";

document.querySelectorAll("[data-video-carousel]").forEach(carousel => {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
  const previous = carousel.querySelector("[data-carousel-previous]");
  const next = carousel.querySelector("[data-carousel-next]");
  const title = carousel.querySelector("[data-carousel-title]");
  const count = carousel.querySelector("[data-carousel-count]");
  let current = 0;

  function showSlide(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((slide, i) => {
      slide.querySelector("video").pause();
      slide.inert = i !== current;
      slide.setAttribute("aria-hidden", String(i !== current));
    });
    track.style.transform = `translateX(-${current * 100}%)`;
    title.textContent = slides[current].dataset.title;
    count.textContent = `${current + 1} / ${slides.length}`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
  }

  previous.addEventListener("click", () => showSlide(current - 1));
  next.addEventListener("click", () => showSlide(current + 1));
  carousel.addEventListener("keydown", event => {
    // Preserve native video controls, including arrow-key seeking.
    if (event.target.closest("video") || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    showSlide(current + (event.key === "ArrowRight" ? 1 : -1));
  });

  previous.hidden = false;
  next.hidden = false;
  showSlide(0);
});
