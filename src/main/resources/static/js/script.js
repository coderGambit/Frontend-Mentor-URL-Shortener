function copyText(text){

    let elToCopy = document.createElement("textarea");
    elToCopy.value = text;
    document.body.appendChild(elToCopy);
    elToCopy.select();
    document.execCommand("copy");
    elToCopy.remove();
}

function generateShortLink(url){

}

function displayShortLink(linkDetails){

    let container = document.createElement("article");
    let originalLink = document.createElement("a");
    let shortLink = document.createElement('a');
    let copyButton = document.createElement("button");

    container.setAttribute("class", "shortLinksContainer");
    originalLink.setAttribute("href", "javascript:void(0)");
    originalLink.setAttribute("class", "originalLink");
    shortLink.setAttribute("href", "javascript:void(0)");
    shortLink.setAttribute("class", "newLink");
    copyButton.setAttribute("class", "roundCornerButtonSmall");

    originalLink.innerText = linkDetails.originalLink;
    shortLink.innerText = linkDetails.shortLink;
    copyButton.innerText = "Copy";

    copyButton.addEventListener('click', ()=>{

        if(copyButton.innerText !== "Copied!"){
            copyButton.innerText = "Copied!";
            copyButton.classList.toggle("roundCornerButtonSmallVisited");
            copyText(copyButton.previousElementSibling.innerText);
        }
    });
}