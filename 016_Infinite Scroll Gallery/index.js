const key = 'rIEfLnql9aICFPslX_iJSsz209MIsDJzrWZHPeMIRfg';
const loadderElem = document.querySelector('.loader');
let page = 1;

function showLoader() {
    loadderElem.classList.add('visible');
}

function hideLoader() {
    loadderElem.classList.remove('visible');
}

async function displayImg() {
    showLoader();

    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${key}&page=${page}`);
    const images = await result.json();

    const galleryElem = document.querySelector('.gallery');

    images.forEach(image => {
        const imgElem = document.createElement('img');
        imgElem.src = image.urls.small;

        galleryElem.appendChild(imgElem);
    });
    hideLoader();
    page+=1

}

function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 15) {
        displayImg();
    }
}

function run() {
    document.addEventListener('scroll',onScroll); 
    displayImg();
}

run();