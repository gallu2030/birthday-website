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
let slideShow;

btn.onclick = () => {

  clearInterval(slideShow);

  music.currentTime = 0;
  music.play();

  alert("🎉 Happy Birthday! Wishing you endless happiness ❤️");

  i = 0;
  slider.src = photos[0];
  caption.innerHTML = captions[0];

  btn.innerHTML = "❤️ Enjoy Your Surprise ❤️";

  slideShow = setInterval(() => {

    i++;

    if (i >= photos.length) {
      clearInterval(slideShow);

      music.pause();
      music.currentTime = 0;

      btn.innerHTML = "🎂 Once Again, Happy Birthday ❤️";
      return;
    }

    slider.src = photos[i];
    caption.innerHTML = captions[i];

  }, 5000);

};

window.onload = () => {
  document.body.style.opacity = "1";
};
