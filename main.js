const screenWidth = window.screen.width;
let screen = "desktop";

if (screenWidth <= 1000) {
  console.log("Mobile View");
  screen = "mobile";
} else {
  const mainIndexElt = document.querySelector("section.menu-contact-logo");
  mainIndexElt.classList.add("large");
  console.log("large class added");
}

const menu = {
  "appetizers": ["chips and salsa", "chips and guacamole", "salad"],
  "entrees": ["tacos", "burritos", "tortas", "sopes", "chimichanga"],
  // "sides": ["", "", "", ""],
  "beverages": ["coca-cola", "lemonade", "iced tea", "aguas frescas"]
};

/*if (screen === "desktop") {
  for (const section of Object.keys(menu)) {
    const newTable = document.createElement("table");
    for (const [i, item, arr] of menu[section]) {
      let newTr
      if (i === arr.length() - 1) {
        const newTr = document.createElement("tr");
      }
      else {
        const newLi = document.createElement("li");
        newLi.textContent = "";
    }
}
}
*/