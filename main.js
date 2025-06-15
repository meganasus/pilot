const menuH2 = document.querySelector(".menu h2");
const menuH3 = document.querySelector("menu h3");
menuH2.addEventListener("click", () => {
  if (menuH3.classList.value.includes("hidden")) menuH3.classList.remove("hidden");
  else menuH3.classList.add("hidden");
})
