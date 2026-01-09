const music = document.getElementById("bg-music");

onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });