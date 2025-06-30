const screenWidth = window.screen.width;
let screen = "desktop";

if (screenWidth <= 1000) {
  const mainIndexElt = document.querySelector("section.menu-contact-logo.large");
  mainIndexElt.classList.remove("large");
  console.log("Large Class Removed");
  screen = "mobile";
} else {
  console.log("large screen");
}

