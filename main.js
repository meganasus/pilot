const menuH2 = document.querySelector(".menu h2");
menuH3.addEventListener("click", () => {
  if (menuH2.classList.value.includes("hidden")) menuH2.classList.remove("hidden");
  else menuH2.classList.add("hidden");
})
