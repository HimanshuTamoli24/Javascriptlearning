const addBtn = document.querySelector(".add-friends");
const istatus = document.querySelector("h5");
let check = 0;

addBtn.addEventListener("click", () => {
  if (check === 0) {
    istatus.innerHTML = "friends";
    istatus.style.color = "green";
    addBtn.textContent = "Unfriend";
    check = 1;
  } else {
    istatus.innerHTML = "unfriends";
    istatus.style.color = "red";
    addBtn.textContent = "Add friends";
    check = 0;
  }
});
