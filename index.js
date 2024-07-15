const soundFiles = {
    w: 'tom-1.mp3',
    a: 'tom-2.mp3',
    s: 'tom-3.mp3',
    d: 'tom-4.mp3',
    j: 'snare.mp3',
    k: 'crash.mp3',
    l: 'kick-bass.mp3',
};

const audio = new Audio();
document.querySelectorAll('.drum-elements').forEach(element => {
    element.addEventListener('click', handleClick);
});

document.addEventListener('keydown', event => {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function handleClick() {
    const buttonText = this.innerHTML;
    makeSound(buttonText);
    buttonAnimation(buttonText);
}

function makeSound(key) {
    if (soundFiles[key]) {
        audio.src = `sounds/${soundFiles[key]}`;
        audio.play();
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(() => activeButton.classList.remove('pressed'), 100);
}
document.querySelector(".submit").addEventListener('click', ()=>{
    alert("Feedback submitted successfully");
console.log("Successfull");
});
