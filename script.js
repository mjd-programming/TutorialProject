var canvas_height = 400;
var canvas_width = 400;

var cd_bo;

var prev_mouseX;
var prev_mouseY;

function setup() {
	var canvas = createCanvas(canvas_width, canvas_height);
	canvas.parent('canvas');
	cd_bo = document.getElementById('canvas').getBoundingClientRect();
	prev_mouseX = mouseX;
	prev_mouseY = mouseY;
}

function draw() {
	if(mouseX > 0 && mouseX < cd_bo.right-cd_bo.x && mouseY > 0 && mouseY < cd_bo.bottom-cd_bo.y) {
		if(mouseIsPressed) {
			fill(0);
			line(mouseX, mouseY, prev_mouseX, prev_mouseY);
		}
	}
	prev_mouseX = mouseX;
	prev_mouseY = mouseY;
}