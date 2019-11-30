var canvas_height = 400;
var canvas_width = 400;

var menuOpen = false;
var colorOpen = false;
var sizeOpen = false;
var shapesOpen = false;

var doingShapes = false;
var doingLines = false;
var currentShape = "";

var cd_bo;

var prev_mouseX;
var prev_mouseY;

var strk = 10;

var current_brush_size = 0;



function setup() {
	var canvas = createCanvas(canvas_width, canvas_height);
	fill(255);
	noStroke();
	rect(0, 0, canvas_width, canvas_height);
	canvas.parent('canvas');
	cd_bo = document.getElementById('canvas').getBoundingClientRect();
	prev_mouseX = mouseX;
	prev_mouseY = mouseY;
	headerButtonSetup();
	fill(0);
	stroke(0)
	doingLines = true;
}

function closeMenu() {
	try {
		var menuB = document.getElementById("menu-button");
		menuB.removeChild(menuB.childNodes[1]);
		setTimeout(function() {
			menuOpen = false;
		}, 1);
	} catch (err) {
	}
}

function closeColors() {
	try {
		var menuB = document.getElementById("color-button");
		menuB.removeChild(menuB.childNodes[1]);
		setTimeout(function() {
			colorOpen = false;
		}, 1);
	} catch (err) {
		
	}
}

function closeSize() {
	try {
		var menuB = document.getElementById("size-button");
		menuB.removeChild(menuB.childNodes[1]);
		setTimeout(function() {
			sizeOpen = false;
		}, 1);
	} catch (err) {
		
	}
}

function closeShapes() {
	try {
		var menuB = document.getElementById("shape-button");
		menuB.removeChild(menuB.childNodes[1]);
		setTimeout(function() {
			shapesOpen = false;
		}, 1);
	} catch (err) {
		
	}
}

function handleOpen() {
	if(menuOpen) closeMenu();
	if(colorOpen) closeColors();
	if(sizeOpen) closeSize();
	if(shapesOpen) closeShapes();
}

function openMenu() {
	if(menuOpen) {
		closeMenu();
		return;
	}
	handleOpen();
	var menu = document.createElement("div");
	menu.style.position = "fixed";
	menu.style.backgroundColor = "#c9c9c9";
	menu.style.padding = "5px";
	var sav = document.createElement("button");
	sav.innerHTML = "Save";
	sav.onclick = function() {
		var filename = prompt("Enter your picture's name (do not include an extension).");
		if(filename === null) return;
		saveCanvas(canvas, filename, "jpg");
	};
	var blank = document.createElement("button");
	blank.innerHTML = "New Canvas";
	blank.onclick = function() {
		clear();
	};
	var exit = document.createElement("button");
	exit.innerHTML = "Exit";
	exit.onclick = closeMenu;
	menu.appendChild(sav);
	menu.appendChild(blank);
	menu.appendChild(exit);
	var menuButton = document.getElementById("menu-button");
	if(!menuOpen) menuButton.appendChild(menu);
	menuOpen = true;
}

function openColors() {
	if(colorOpen) {
		closeColors();
		return;
	}
	handleOpen();
	var menu = document.createElement("div");
	menu.style.position = "fixed";
	menu.style.backgroundColor = "#c9c9c9";
	menu.style.padding = "5px";
	var black = document.createElement("button");
	black.innerHTML = "Black";
	black.onclick = function() {
		stroke(color(0,0,0));
		fill(color(0,0,0));
	};
	var white = document.createElement("button");
	white.innerHTML = "White";
	white.onclick = function() {
		stroke(color(255,255,255));
		fill(color(255,255,255));
	};
	var red = document.createElement("button");
	red.innerHTML = "Red";
	red.onclick = function() {
		stroke(color(255,0,0));
		fill(color(255,0,0));
	};
	var orange = document.createElement("button");
	orange.innerHTML = "Orange";
	orange.onclick = function() {
		stroke(color(255,150,0));
		fill(color(255,150,0));
	};
	var yellow = document.createElement("button");
	yellow.innerHTML = "Yellow";
	yellow.onclick = function() {
		stroke(color(255,255,0));
		fill(color(255,255,0));
	};
	var green = document.createElement("button");
	green.innerHTML = "Green";
	green.onclick = function() {
		stroke(color(0,255,0));
		fill(color(0,255,0));
	};
	var blue = document.createElement("button");
	blue.innerHTML = "Blue";
	blue.onclick = function() {
		stroke(color(0,0,255));
		fill(color(0,0,255));
	};
	var purple = document.createElement("button");
	purple.innerHTML = "Purple";
	purple.onclick = function() {
		stroke(color(255,0,255));
		fill(color(255,0,255));
	};
	var brown = document.createElement("button");
	brown.innerHTML = "Brown";
	brown.onclick = function() {
		stroke(color(139,69,16));
		fill(color(139,69,16));
	};
	menu.appendChild(black);
	menu.appendChild(white);
	menu.appendChild(red);
	menu.appendChild(orange);
	menu.appendChild(yellow);
	menu.appendChild(green);
	menu.appendChild(blue);
	menu.appendChild(purple);
	menu.appendChild(brown);
	var menuButton = document.getElementById("color-button");
	if(!colorOpen) menuButton.appendChild(menu);
	colorOpen = true;
}

function openSize() {
	if(sizeOpen) {
		closeSize();
		return;
	}
	handleOpen();
	var menu = document.createElement("div");
	menu.style.position = "fixed";
	menu.style.backgroundColor = "#c9c9c9";
	menu.style.padding = "5px";
	var slider = document.createElement("input");
	slider.type = "range";
	slider.min = "1";
	slider.max = "100";
	slider.value = strk;
	slider.id = "size-slider";
	slider.oninput = function() {
		strk = slider.value;
	}
	menu.appendChild(slider);
	var menuButton = document.getElementById("size-button");
	if(!sizeOpen) menuButton.appendChild(menu);
	sizeOpen = true;
}

function openShapes() {
	if(shapesOpen) {
		closeShapes();
		return;
	}
	handleOpen();
	var menu = document.createElement("div");
	menu.style.position = "fixed";
	menu.style.backgroundColor = "#c9c9c9";
	menu.style.padding = "5px";
	var triangle = document.createElement("button");
	triangle.innerHTML = "Triangle";
	triangle.onclick = function() {
		doingShapes = true;
		doingLines = false;
		currentShape = "triangle";
	};
	var circle = document.createElement("button");
	circle.innerHTML = "Circle";
	circle.onclick = function() {
		doingShapes = true;
		doingLines = false;
		currentShape = "circle";
	};
	var square = document.createElement("button");
	square.innerHTML = "Square";
	square.onclick = function() {
		doingShapes = true;
		doingLines = false;
		currentShape = "square";
	};
	var pentagon = document.createElement("button");
	pentagon.innerHTML = "Pentagon";
	pentagon.onclick = function() {
		doingShapes = true;
		doingLines = false;
		currentShape = "pentagon";
	};
	var star = document.createElement("button");
	star.innerHTML = "Star";
	star.onclick = function() {
		doingShapes = true;
		doingLines = false;
		currentShape = "star";
	};
	menu.appendChild(circle);
	menu.appendChild(triangle);
	menu.appendChild(square);
	menu.appendChild(pentagon);
	menu.appendChild(star);
	var menuButton = document.getElementById("shape-button");
	if(!shapesOpen) menuButton.appendChild(menu);
	shapesOpen = true;
}

function headerButtonSetup() {
	var headerButtons = document.getElementsByClassName('header-button');
	headerButtons[0].onclick = openMenu;
	headerButtons[1].onclick = openColors;
	headerButtons[2].onclick = openSize;
	headerButtons[3].onclick = openShapes;
}

function mouseReleased() {
	doingLines = true;
}

function draw() {
	if(mouseX > 0 && mouseX < cd_bo.right-cd_bo.x && mouseY > 0 && mouseY < cd_bo.bottom-cd_bo.y) {
		if(mouseIsPressed) {
			if(!doingShapes && doingLines) {
				strokeWeight(strk);
				line(mouseX, mouseY, prev_mouseX, prev_mouseY);
			} else if(doingShapes) {
				if(!currentShape.localeCompare("circle")) ellipse(mouseX, mouseY, strk, strk);
				if(!currentShape.localeCompare("triangle")) triangle(mouseX-parseInt((strk/2)), mouseY+parseInt(strk/2), mouseX, mouseY-parseInt(strk/2), mouseX+parseInt(strk/2), mouseY+parseInt(strk/2));
				if(!currentShape.localeCompare("square")) rect(mouseX-parseInt(strk/2), mouseY-parseInt(strk/2), strk, strk);
				if(!currentShape.localeCompare("pentagon")) {
					beginShape();
					vertex(mouseX, mouseY-(strk*(50/50)));
					vertex(mouseX-(strk*(48/50)), mouseY-(strk*(15/50)));
					vertex(mouseX-(strk*(29/50)), mouseY+(strk*(40/50)));
					vertex(mouseX+(strk*(29/50)), mouseY+(strk*(40/50)));
					vertex(mouseX+(strk*(48/50)), mouseY-(strk*(15/50)));
					endShape(CLOSE);
				}
				if(!currentShape.localeCompare("star")) {
					translate(mouseX, mouseY);
					for(var i = 0; i < 5; i++) {
						triangle(-parseInt((strk/2)), parseInt(strk/2), 0, -parseInt(strk*2), parseInt(strk/2), parseInt(strk/2));
						rotate(PI/2.5);
					}
				}
				doingShapes = false;
			}
		} 
	}
	prev_mouseX = mouseX;
	prev_mouseY = mouseY;
}