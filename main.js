const menuH3 = document.querySelector(".menu h3");
menuH3.addEventListener("click", () => {
  if (menuH3.classList.value.includes("hidden")) document.querySelector(".menu.hidden h3").classList.remove("hidden");
  else document.querySelector(".menu h3").classList.add("hidden");
})
