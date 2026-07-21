// Birthday Website Scri
const music = document.getElementById("music");
const btn = document.getElementById("playBtn");
const slider = document.getElementById("slider");

const photos = [
  "birthday.jpg",
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg"
];
const captions = [
  "✨ Some people become a beautiful chapter in our life without even trying... You're one of them. ❤️",
  "🌸 May today bring you as much happiness as your smile brings to everyone around you.",
  "🌙 Keep smiling, keep shining, and never stop being the wonderful person you are.",
  "🎂 Happy Birthday! I hope this little surprise brings a smile to your face. Always stay happy. ❤️"
];

const caption = document.getElementById("caption");
let i = 0;

btn.onclick = () => {
  music.currentTime = 0;
  music.play();

  setTimeout(() => {
    music.pause();
    music.currentTime = 0;
  }, 20000);

  alert("🎉 Happy Birthday! Wishing you endless happiness ❤️");

  setInterval(() => {
    i = (i + 1) % photos.length;
    slider.src = photos[i];
    caption.innerHTML = captions[i];
  }, 2500);

  btn.innerHTML = "❤️ Enjoy Your Surprise ❤️";
};

window.onload = () => {
  document.body.style.opacity = "1";
};
