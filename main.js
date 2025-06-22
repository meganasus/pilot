const mobileImg = document.querySelector("img.mobil-background");
if (window.screen.width <= 1000) {
    mobilImg.classList.remove("hidden");
    document.querySelector("img.background").classList.add("hidden");
}