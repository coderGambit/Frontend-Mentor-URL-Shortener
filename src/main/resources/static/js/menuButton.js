let opened = false;
let el = document.getElementById("menuButton");
let menu = document.getElementById('menuLinks');

el.addEventListener("click", () => {
    let children = el.children;

    if (!opened) {
        children[0].style.animationName = "slideDownToCenterAndRotate";
        children[1].style.animationName = "scaleDown";
        children[2].style.animationName = "slideUpToCenterAndRotate";
        menu.style.transform = "scale(1)";
    }
    else {
        children[0].style.animationName = "slideDownToCenterAndRotateReverse";
        children[1].style.animationName = "scaleUp";
        children[2].style.animationName = "slideUpToCenterAndRotateReverse";
        menu.style.transform = "scale(0)";
    }
    opened = !opened;
});