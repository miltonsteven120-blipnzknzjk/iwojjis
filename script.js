const tulip = document.getElementById("tulip");
const textBox = document.getElementById("textBox");

let opened = false;

tulip.addEventListener("click", () => {
  if (!opened) {
    tulip.classList.add("open");
    textBox.classList.add("show");
    opened = true;
  }
});
