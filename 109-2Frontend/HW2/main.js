var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
const sharp = require("sharp");
var jpgOne = document.getElementById('div1');
sharp("../images/20210405.png")
  .resize({ width: 250, height: 350 })
  .toFile("resize.png");