function setup() {
	createCanvas(500, 500);
	arrows = [];
	gameFloor = new gameFloor();
}

function draw() {
	background(100);
	gameFloor.display();


	for (var i = 0; i < arrows.length; i++) {
		// console.log(arrows[i].getWidth());
		// arrows[i].show();
		// arrows[i].update();
		if (arrows[i].mass <= 0 || arrows[i].position.y > 350) {
			arrows[i].updateStopped();
			arrows[i].show();

			if (arrows[i].timeSinceStop > 100) {
				arrows.splice(i, 1);
			}
		} else {
			var gravity = createVector(0, 0.1*arrows[i].mass);
			arrows[i].applyForce(gravity);
	   		
		    // Update and display
		    arrows[i].update();
		    arrows[i].show();
		}
	}
}

function mousePressed() {
	var x = mouseX;
	var y = mouseY;
	arrow = new Arrow(x,y);
	arrows.push(arrow);
}

function gameFloor() {
	this.display = function() {
		noStroke();
		fill(75);
		rect(0, 350, 500, 150);
	}
}