console.log("Welcome to glassmorphic calculator");
let btn = document.getElementsByClassName("btn");
let display = document.getElementById("display");
let txt = document.querySelector(".txt");
let letter = "Calculator";
string = " ";
let i = 0;
let n = letter.length;
let remove;

//typing animation....
let write = setInterval(type, 1000);
function type() {
  txt.innerHTML += letter.charAt(i);
  i++;
  if (i == letter.length) {
    //clearInterval(write)
    setTimeout(() => {
      remove = setInterval(dlt, 150);
    }, 2500);
  }
}

function dlt() {
  txt.innerHTML = letter.substring(0, n);
  n--;
  if (n == -1) {
    i = 0;
    n = letter.length;
    clearInterval(remove);
    clearInterval(write);
    setTimeout(() => {
      write = setInterval(type, 1000);
    }, 3000);
  }
}

let box = document.querySelector(".main");
box.addEventListener("mousemove", (e) => {
  let Bwidth = box.offsetWidth;
  let Bheight = box.offsetHeight;
  let centerX = box.offsetLeft + Bwidth / 2;
  let centerY = box.offsetTop + Bheight / 2;
  let eventX = e.clientX - centerX;
  let eventY = e.clientY - centerY;
  let rotateX = (20 * eventY) / (Bheight / 2);
  let rotateY = (-1 * 20 * eventX) / (Bwidth / 2);
});

box.addEventListener("mouseenter", () => {
  box.style.transition = "all 0.05s ease";
});

box.addEventListener("mouseleave", () => {
  box.style.transform = `rotateX(${0}deg) rotateY(${0}deg`;
  box.style.transition = "all 0.6s ease";
});
//calculator logic
Array.from(btn).forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(element);
    let val = e.target.innerHTML;
    if (val == "=") {
      string = eval(string);
      display.value = string;
      //string = "";
    } else if (val == "c") {
      string = "";
      display.value = string;
    } else {
      string = string + val;
      display.value = string;
    }
  });
});

function newFunction() {
  while (n < 5);
}
