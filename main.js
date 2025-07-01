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

const menu = {
  "appetizers": ["chips and salsa", "chips and guacamole", "salad"],
  "entrees": ["tacos", "burritos", "tortas", "sopes", "chimichanga"],
  // "sides": ["", "", "", ""],
  "beverages": ["coca-cola", "lemonade", "iced tea", "aguas frescas"]
};

if (screen === "desktop") {
  for (const section of Object.keys(menu)) {
  if (section === "appetizer" || section === "entrees" || section) {
  const new
}
  else 
  const newLi = document.createElement("li");
  newLi.textContent = "";
}
}
