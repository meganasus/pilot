const menuH3 = document.querySelector(".menu h3");
menuH3.addEventListener("click", () => {
  if (menuH3.classList.value.includes("hidden")) menuH3.classList.remove("hidden");
  else menuH3.classList.add("hidden");
})
