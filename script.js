const year = document.querySelector("#year");
const brandTracks = document.querySelectorAll(".brand-track");

if (year) {
  year.textContent = new Date().getFullYear();
}

brandTracks.forEach((track) => {
  track.innerHTML += track.innerHTML;
});
