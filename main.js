const mobileImg = document.querySelector("img.background-mobil");
const screenWidth = screen.width;
if (screenWidth <= 1000) {
    mobileImg.classList.remove("hidden");
} else {
    const backgroundImg = document.querySelector("img.background");
    backgroundImg.classList.remove("hidden");
}