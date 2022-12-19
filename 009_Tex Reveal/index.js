function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll('section'));

    sectionElems.forEach((sectionElem) => {
        const imgElem = sectionElem.querySelector('img');
        const textElem = sectionElem.querySelector('.text');

        const scrollPosition = window.pageYOffset;
        const reviewPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;

        if (scrollPosition >= reviewPosition) {
            textElem.classList.add('reveal');
        } 
    });

}

function run() {
    document.addEventListener('scroll',onScroll);
}

run()