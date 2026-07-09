const year = document.querySelector("#year");
const brandTracks = document.querySelectorAll(".brand-track");
const brandsSection = document.querySelector("#marchi");

if (year) {
  year.textContent = new Date().getFullYear();
}

function preloadBrandLogos() {
  const brandImages = document.querySelectorAll(".brand-logo img");
  const sources = new Set();

  brandImages.forEach((image) => {
    if (image.currentSrc || image.src) {
      sources.add(image.currentSrc || image.src);
    }
    image.loading = "eager";
    image.fetchPriority = "low";
    image.setAttribute("fetchpriority", "low");
  });

  sources.forEach((source) => {
    const image = new Image();
    image.decoding = "async";
    image.fetchPriority = "low";
    image.setAttribute("fetchpriority", "low");
    image.src = source;
  });
}

brandTracks.forEach((track) => {
  track.innerHTML += track.innerHTML;
});

if (brandsSection && "IntersectionObserver" in window) {
  const brandObserver = new IntersectionObserver(
    (entries, observer) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        preloadBrandLogos();
        observer.disconnect();
      }
    },
    {
      rootMargin: "1400px 0px",
      threshold: 0,
    }
  );

  brandObserver.observe(brandsSection);
} else {
  window.addEventListener("load", preloadBrandLogos, { once: true });
}
