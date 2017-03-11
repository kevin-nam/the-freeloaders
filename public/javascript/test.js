function Monster(speed, x, y, img) {
	this.speed = speed;
	this.x = x;
	this.y = y;
	this.height = random(1,10);
	this.width = this.height;
	this.img = img;

	this.load = function() {
		image(this.img, this.x - (this.width), this.y, this.width, this.height);
	}

	this.update = function() {
			this.width = this.width + this.speed;
			this.height = this.height + this.speed;
	}

	this.isHit = function(x, y, z) {
		console.log("z of monster = " + (250 - this.height));
		console.log("arrow z = " + z);
		if ((z <= 250 - this.height + 10 && z >= 250 - this.height - 10) &&
			(x <= this.x + this.width && x >= this.x) &&
			(y <= this.y + this.width && y >= this.y )) {
				return true;
			} else {
				return false;
			}
	}
}
