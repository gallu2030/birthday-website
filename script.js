// Birthday Website Script

const music = document.getElementById("music");
const btn = document.getElementById("playBtn");

if (btn) {
  btn.addEventListener("click", () => {
    music.play();
    btn.innerHTML = "🎵 Playing...";
  });
}

// Simple animation on load
window.onload = () => {
  document.body.classList.add("loaded");
};
