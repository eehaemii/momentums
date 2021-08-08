const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const wrap = document.querySelector("#wrap");
const time = document.querySelector("#time");
const dayData = document.querySelector("#day");

// bg color
function randomcolor() {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    return newColor;
}

function setGradient(){
    const ran1 = randomcolor(),
          ran2 = randomcolor();
    wrap.style.background = `linear-gradient(-45deg, ${ran1},${ran2})`;
}

function randomGradient() {
    setGradient();
}

setInterval(randomGradient, 5000);
