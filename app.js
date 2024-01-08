const quotetext = document.querySelector('.quote');
const authorName = document.querySelector('.name');
const quoteButton = document.querySelector('button');
const soundbtn = document.querySelector('.sound');
const copybtn = document.querySelector('.copy');
const twitterbtn = document.querySelector('.twitter');
quoteButton.addEventListener('click', () => {
    quoteButton.classList.add('loading');
    quoteButton.innerText = "Loading Quotes..."
    fetch('https://api.quotable.io/random').then(res => res.json()).then((res) => {
        quotetext.innerHTML = res.content
        authorName.innerText = res.author
        quoteButton.innerText = "New Quote"
        quoteButton.classList.remove('loading');
    }).catch((error) => {
        console.log(error);
    })
})
soundbtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quotetext.innerHTML}  by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
copybtn.addEventListener('click', () => {
    navigator.clipboard.writeText(`${quotetext.innerHTML}`);
});
twitterbtn.addEventListener('click', () => {
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quotetext.innerHTML}`
    window.open(twitterUrl, "_blank");
});
