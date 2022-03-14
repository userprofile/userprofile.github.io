let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/reklama-w-internecie.jpg') {
        myImage.setAttribute('src', 'images/marketing.jpg');
    } else {
        myImage.setAttribute('src', 'images/reklama-w-internecie.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = () => {
    setUserName();
}

/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Wstęp JS, HTML, CSS';

let myArray = [1, 'Bob', 'Steve', 10] //Array
let myNumber = 10;
let myBoolean = true;
let myString = "Bob";
let myObject = {};

let my3 = 3;
let myN3 = !my3;
console.log(myN3);

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwww, but chocolate is my favorite...');
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector('html').addEventListener('click', () => {
    alert('Ouch! Stop poking me!');
});

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
    alert('Ouch! Stop fucking me!');
});*/