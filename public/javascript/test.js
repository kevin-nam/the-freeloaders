var monsters = [];

var mushroom;

function Monster(speed, x, y, img) {
	this.speed = speed;
	this.x = x;
	this.y = y;
	this.height = random(1,10);
	this.width = this.height;
	this.img = img;

	this.load = function() {
		rect(this.x, this.y, this.width, this.height);
		image(this.img, this.x, this.y, this.width, this.height);
	}

	this.update = function() {
			this.width = this.width + this.speed;
			this.height = this.height + this.speed;
			console.log(this.width);
	}

	this.getHitbox = function() {

	}
}

function setup() {
	createCanvas(600, 600);
	background(100);
	mushroom = loadImage("/images/kingslime.gif");
}

function draw() {
	background(100);

	if (monsters.length < 3) {
		monster = new Monster(random(0,2), 150, random(0,300), mushroom);
		console.log(monster);
		monsters.push(monster);
	}

	for (var i = 0; i < monsters.length; i++) {
		console.log(monsters[i].width);
		if (monsters[i].width > 300) {
			console.log('deleting');
			monsters.splice(i, 1);
		} else {
			monsters[i].load();
			monsters[i].update();
		}
	}

}
