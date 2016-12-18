
function Perso () {
	this.pos = createVector(width / 2, height / 2);
	this.scale = 25;
	this.scaling = 0;
	this.direction = 0;
	this.rotation = 0;
	this.speed = 0;
	this.isHit = false;
	this.render = function () {
		translate(this.pos.x, this.pos.y);
		rotate(radians(this.direction) + PI / 2);
		triangle(-this.scale, this.scale, this.scale, this.scale,
			0, -this.scale);
		// rect(this.pos.x - this.scale / 2, this.pos.y - this.scale / 2,
		// 	this.scale, this.scale);
	}
	this.setScaling = function (value) {
		this.scaling = value;
	}
	this.rescale = function () {
		if ((this.scaling >= 0 && this.scale < 400) || 
			(this.scaling <= 0 && this.scale > 0))
		this.scale += this.scaling;
	}
	this.rotate = function () {
		this.direction += this.rotation;
	}
	this.setRotation = function (angle) {
		this.rotation = angle;
	}
	this.move = function () {
		this.pos.x += cos(radians(this.direction)) * this.speed;
		this.pos.y += sin(radians(this.direction)) * this.speed;
	}
	this.setSpeed = function (speed) {
		this.speed = speed;
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
	this.hits = function (target) {
		var d = dist(target.pos.x, target.pos.y, this.pos.x, this.pos.y);
		this.isHit = (this.isHit || (d < (this.scale + 35)));
	}
}