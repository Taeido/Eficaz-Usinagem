document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".gallery-scroll");
  const prev = document.getElementById("galleryPrev");
  const next = document.getElementById("galleryNext");

  if (!scroller || !prev || !next) return;

  const step = () => Math.max(260, Math.floor(scroller.clientWidth * 0.8));

  const update = () => {
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    prev.disabled = scroller.scrollLeft <= 5;
    next.disabled = scroller.scrollLeft >= maxScroll - 5;
  };

  prev.addEventListener("click", () => scroller.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => scroller.scrollBy({ left: step(), behavior: "smooth" }));

  scroller.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  update();
});
