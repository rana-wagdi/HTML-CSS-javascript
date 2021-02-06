

var pic = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];
var randomNumber1 = pic[Math.floor( Math.random()*pic.length)];
var randomNumber2 = pic[Math.floor(Math.random() * pic.length)];

document.querySelector(".img1").src=randomNumber1;
document.querySelector(".img2").src = randomNumber2;