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

let i = 0;

btn.onclick = () => {
music.play();

alert("🎉 Happy Birthday! Wishing you endless happiness ❤️");

setInterval(() => {
i = (i + 1) % photos.length;
slider.src = photos[i];
}, 2500);

btn.innerHTML = "❤️ Enjoy Your Surprise ❤️";
};

window.onload = () => {
document.body.style.opacity = "1";
};
