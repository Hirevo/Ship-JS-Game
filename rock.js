
function Rock (pos) {
	this.pos = createVector(random(0, windowWidth), random(0, windowHeight));
	while (dist(pos.x, pos.y, this.pos.x, this.pos.y) < 175)
		this.pos = createVector(random(0, windowWidth), random(0, windowHeight));
	this.vel = p5.Vector.random2D().mult(3);
	this.res = random(5, 7);
	this.isHit = false;
	this.render = function () {
		push();
		strokeWeight(2);
		translate(this.pos.x, this.pos.y);
		beginShape();
		for (var i = 0; i <= this.res; i++) {
			var r = map(i, 0, this.res, 0, TWO_PI);
			vertex(cos(r) * 35, sin(r) * 35);
		}
		endShape(CLOSE);
		pop();
	}
	this.update = function () {
		this.pos.add(this.vel);
	}
	this.edges = function () {
		if (this.pos.y > windowHeight)
			this.pos.y = 0;
		else if (this.pos.y < 0)
			this.pos.y = windowHeight;
		if (this.pos.x > windowWidth)
			this.pos.x = 0;
		else if (this.pos.x < 0)
			this.pos.x = windowWidth;
	}
}