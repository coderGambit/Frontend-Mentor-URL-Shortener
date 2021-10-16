let opened = false;
let el = document.getElementById("menuButton");
el.addEventListener("click", () => {
    let children = el.children;

    if (!opened) {
        children[0].style.animationName = "slideDownToCenterAndRotate";
        children[1].style.animationName = "scaleDown";
        children[2].style.animationName = "slideUpToCenterAndRotate";
    } else {
        children[0].style.animationName = "slideDownToCenterAndRotateReverse";
        children[1].style.animationName = "scaleUp";
        children[2].style.animationName = "slideUpToCenterAndRotateReverse";
    }
    opened = !opened;
});