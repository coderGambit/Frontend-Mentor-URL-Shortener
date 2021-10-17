let opened = false;
let el = document.getElementById("menuButton");
let menuLinks = document.getElementById('menuLinks');
const menuHeight = menuLinks.offsetHeight;

el.addEventListener("click", () => {
    let children = el.children;

    if (!opened) {
        children[0].style.animationName = "slideDownToCenterAndRotate";
        children[1].style.animationName = "scaleDown";
        children[2].style.animationName = "slideUpToCenterAndRotate";
        menuLinks.style.height = `${menuHeight}` + 'px';
        menuLinks.style.padding = "40px 20px";
    }
    else {
        children[0].style.animationName = "slideDownToCenterAndRotateReverse";
        children[1].style.animationName = "scaleUp";
        children[2].style.animationName = "slideUpToCenterAndRotateReverse";
        menuLinks.style.height = "0";
        menuLinks.style.padding = "0 20px";
    }
    opened = !opened;
});