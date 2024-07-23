var container = document.querySelector(".container");
var icon = document.querySelector(".container i");

container.addEventListener("dblclick", () => {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = 0.8;
  setTimeout(() => {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 3000);
  setTimeout(() => {
    icon.style.opacity = 0;
  }, 1000);
});
