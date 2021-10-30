let urlShortenerForm = document.querySelector('.urlShortenerForm');
let shortenedLinksContainer = document.querySelector(".shortenedLinks");
let loadingElement = document.querySelector(".loading");

window.onload = ()=>{
    urlShortenerForm.reset();
}

document.addEventListener('DOMContentLoaded', ()=>{
    urlShortenerForm.addEventListener('submit', generateShortLink, false);
}, false);

function copyText(text){

    let elToCopy = document.createElement("textarea");
    elToCopy.value = text;
    elToCopy.textContent = text;
    document.body.appendChild(elToCopy);
    elToCopy.select();
    document.execCommand("copy");
    elToCopy.remove();
}

function generateShortLink(e){
    e.preventDefault();
    let formData = new FormData(urlShortenerForm);
    getShortLink(formData.get("urlShortenerInput"));
}

function addLoading() {
    loadingElement.style.display = "flex";
}

function removeLoading() {
    loadingElement.style.display = "none";
}

async function getShortLink(link) {

    let url = "/shortenLink";
    let options = {
        method: 'POST'
    };

    if(link != null){
        options['body'] = link;
    }

    const resp = await fetch(url, options);
    addLoading();
    if(resp.ok){
        const jsonDetails = await resp.json();
        createResultElement(jsonDetails);
        removeLoading();
    }
    else{
        alert("An error occurred");
        removeLoading();
    }
}

function createResultElement(linkDetails){

    let container = document.createElement("article");
    let originalLink = document.createElement("a");
    let divider = document.createElement("div");
    let shortLink = document.createElement('a');
    let copyButton = document.createElement("button");

    container.setAttribute("class", "shortLinksContainer");
    originalLink.setAttribute("href", "javascript:void(0)");
    originalLink.setAttribute("class", "originalLink");
    divider.setAttribute("class", "divider");
    shortLink.setAttribute("href", "javascript:void(0)");
    shortLink.setAttribute("class", "newLink");
    copyButton.setAttribute("class", "roundCornerButtonSmall");

    originalLink.innerText = linkDetails.result.original_link;
    shortLink.innerText = linkDetails.result.full_short_link;
    copyButton.innerText = "Copy";

    copyButton.addEventListener('click', ()=>{

        if(copyButton.innerText !== "Copied!"){
            copyButton.innerText = "Copied!";
            copyButton.classList.toggle("roundCornerButtonSmallVisited");
            copyText(copyButton.previousElementSibling.innerText);
        }
    });
    container.append(originalLink, divider, shortLink, copyButton);
    shortenedLinksContainer.append(container);
}