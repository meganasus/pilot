const mobileImg = document.querySelector("img.background-mobil");
const screenWidth = window.screen.width;
if (screenWidth <= 1000) {
    mobileImg.classList.remove("hidden");
    document.querySelector("img.background").classList.add("hidden");
}