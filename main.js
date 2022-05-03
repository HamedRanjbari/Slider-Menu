const $ = document;
const openBtn = $.querySelector(".open");
const closeBtn = $.querySelector(".close");
const layersMenu = $.querySelectorAll(".layer");

openBtn.addEventListener("click", () => {
    layersMenu.forEach(layer => {
        layer.classList.add("show")
    });
})
closeBtn.addEventListener("click", () => {
    layersMenu.forEach(layer => {
        layer.classList.remove("show")
    });
})