function setup() {
	createCanvas(1000, 500);
	arrows = [];
	monsters = [];
	gameFloor = new gameFloor();
	mushroom = loadImage("/images/mushroom.png");
}

function draw() {
	background(100);
	gameFloor.display();


	monsterDraw();
	arrowDraw();
	checkMonsterHitbox();
}

function checkMonsterHitbox() {
	for (var i = 0; i < arrows.length; i++) {
		arrow = arrows[i];
		for (var j = 0; j < monsters.length; j++) {
			if (arrow.mass > 0) {
				if(monsters[j].isHit(arrow.position.x, arrow.position.y, arrow.z)) {
					console.log("hit!");
					monsters.splice(j, 1);
				}
			}
		}
	}
}


function monsterDraw() {
	if (monsters.length < 1) {
		monster = new Monster(0, random(300,600), 270, mushroom);
		monsters.push(monster);
	}

	for (var i = 0; i < monsters.length; i++) {
		//console.log(monsters[i].width);
		if (monsters[i].width > 250) {
			monsters.splice(i, 1);
		} else {
			monsters[i].load();
			monsters[i].update();
		}
	}
}

function arrowDraw() {
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
		rect(0, 350, 1000, 300);
	}
}
