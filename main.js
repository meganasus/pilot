const mobileImg = document.querySelector("img.background-mobil");
const screenWidth = window.screen.width;
if (screenWidth <= 1000) {
    mobileImg.classList.remove("hidden");
    const backgroundImg = document.querySelector("img.background");
    backgroundImg.classList.add("hidden");
}