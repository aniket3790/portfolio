
var i = 0;
var txt = document.querySelector('.hero-wrap').innerHTML.value
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}