
function Perso () {
	this.pos = createVector(width / 2, height / 2);
	this.scale = 25;
	this.scaling = 0;
	this.direction = 0;
	this.rotation = 0;
	this.forwardSpeed = 0;
	this.sideSpeed = 0;
	this.isHit = false;
	this.render = function () {
		translate(this.pos.x, this.pos.y);
		rotate(this.direction + PI / 2);
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
		this.direction = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
	}
	this.moveForward = function () {
		this.pos.x += cos(this.direction) * this.forwardSpeed;
		this.pos.y += sin(this.direction) * this.forwardSpeed;
	}
	this.moveSideways = function () {
		this.pos.x += cos(this.direction + PI / 2) * this.sideSpeed;
		this.pos.y += sin(this.direction + PI / 2) * this.sideSpeed;
	}
	this.setForwardSpeed = function (speed) {
		this.forwardSpeed = speed;
	}
	this.setSideSpeed = function (speed) {
		this.sideSpeed = speed;
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