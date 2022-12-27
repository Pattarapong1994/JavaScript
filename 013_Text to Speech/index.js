const message = new SpeechSynthesisUtterance();

function onVoicesChanged() {
    const voices = speechSynthesis.getVoices();
    const thVoices =  voices.find(voices => voices.lang === 'th-TH');
    message.voice = thVoices;
}

function onClick(event) {
    message.text = event.target.getAttribute('alt');
    speechSynthesis.speak(message); 
}

function run() {
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

    const imgElems = Array.from(document.querySelectorAll('img'));
    imgElems.forEach(imgElem => imgElem.addEventListener('click', onClick));
}

run()