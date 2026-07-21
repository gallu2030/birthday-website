// Birthday Website Scri
const music = document.getElementById("music");
const btn = document.getElementById("playBtn");

btn.addEventListener("click", () => {
  music.play();
  alert("🎉 Happy Birthday! ❤️");
  btn.innerHTML = "🎵 Playing...";
});

window.onload = () => {
  document.body.classList.add("loaded");
};
