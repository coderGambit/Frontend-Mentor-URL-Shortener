let opened = false;
let el = document.getElementById("menuButton");
let menuLinks = document.getElementById('menuLinks');

el.addEventListener("click", () => {
    let children = el.children;

    if (!opened) {
        children[0].style.animationName = "slideDownToCenterAndRotate";
        children[1].style.animationName = "scaleDown";
        children[2].style.animationName = "slideUpToCenterAndRotate";
    }
    else {
        children[0].style.animationName = "slideDownToCenterAndRotateReverse";
        children[1].style.animationName = "scaleUp";
        children[2].style.animationName = "slideUpToCenterAndRotateReverse";
    }
    menuLinks.classList.toggle('menuLinksOpened');
    opened = !opened;
});