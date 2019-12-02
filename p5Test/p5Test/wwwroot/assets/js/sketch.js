var cnv;

function setup() {
    cnv = createCanvas(400, 300);
    
    centerCanvas(cnv);
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