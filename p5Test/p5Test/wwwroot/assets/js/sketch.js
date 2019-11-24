// .save(name.ext);

var img;

function setup() {
    createCanvas(displayWidth, displayHeight);
    strokeWeight(10);
    stroke(0);
    
}

function draw() {
    
}

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
}