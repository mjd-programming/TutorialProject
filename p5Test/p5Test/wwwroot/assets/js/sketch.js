// .save(name.ext);

var img;

function setup() {
    cnv = createCanvas(400, 300);
    strokeWeight(10);
    stroke(0);
    centerCanvas();
}

function draw() {
    
}

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
}

function centerCanvas() {
    var x = 1400
    var y = 190
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}