
function Laser (pos, angle) {
	this.pos = pos.copy();
	this.angle = angle;
	this.render = function () {
		point(this.pos.x, this.pos.y);
	}
	this.update = function () {
		this.pos.x += cos(radians(this.angle)) * 20;
		this.pos.y += sin(radians(this.angle)) * 20;
	}
	this.hits = function (target) {
		var d = dist(target.pos.x, target.pos.y, this.pos.x, this.pos.y);
		target.isHit = (target.isHit || (d < 35));
	}
	this.isOffscreen = function () {
		return (this.pos.y > windowHeight || this.pos.y < 0 ||
			this.pos.x > windowWidth || this.pos.x < 0)
	}
}