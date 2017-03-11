function Arrow(x,y) {
	// var width = 100;
	// var height = 100;
	// var posX = x;
	// var posY = y;

	this.mass = 10;
	this.position = createVector(x,y);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.timeSinceStop = 0;

	this.show = function() {
		// ellipse(posX, posY, width, height);

		stroke(0);
		strokeWeight(2);
		fill(255,127);
		ellipse(this.position.x,this.position.y,this.mass*10,this.mass*10);
	}

	this.update = function() {
		//when it reaches the floor, destroy.
			this.mass = this.mass - 0.1;

			this.velocity.add(this.acceleration);
			// position changes by velocity
			this.position.add(this.velocity);
			// We must clear acceleration each frame
			this.acceleration.mult(0);
	}

	this.updateStopped = function() {
		this.timeSinceStop++;
	}

	this.getWidth = function() {
		return width;
	}

	this.applyForce = function(force) {
		var f = p5.Vector.div(force,this.mass);
  		this.acceleration.add(f);
	}
}