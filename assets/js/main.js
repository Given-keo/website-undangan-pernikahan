// manipulasi humbergur menu supaya ketika di klik, overflow tidak hidden
const stickyTop = document.querySelector('.sticky-top');
const offCanvas = document.querySelector(".offcanvas");

offCanvas.addEventListener("show.bs.offcanvas", () => {
  stickyTop.style.overflow = "visible";
});

offCanvas.addEventListener("hidden.bs.offcanvas", () => {
    stickyTop.style.overflow = "hidden";
});