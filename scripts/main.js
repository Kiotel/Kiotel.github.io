let name = prompt("Enter your name: ")
localStorage.setItem('name', name);

document.querySelector(".changeImage").onclick = function () {
    let image = document.querySelector('img');
    if (image.src.includes('audio.ico')) {
        image.src = '../images/audio2.ico';
    } else {
        image.src = '../images/audio.ico';
    }
}

document.querySelector(".calculator").onclick = function () {
    let a = prompt("Enter first value: ");
    if (a === null) a = 0;
    let b = prompt("Enter second value: ");
    if (b === null) b = 0;
    alert(`result: ${Number(a) + Number(b)}`);
}

document.querySelector(".showName").onclick = function () {
    alert(`Your name is: "${localStorage.getItem('name')}"`);
}
