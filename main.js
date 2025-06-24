const screenWidth = screen.width;

if (screenWidth <= 1000) {
  const mainIndexElt = document.querySelector("main.menu-contact large");
  mainIndexElt.classList.remove("large");
  console.log("Large Class Removed");
} else {
  console.log("large screen");
}
