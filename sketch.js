
function setup() {
	createCanvas(windowWidth, windowHeight);
	perso = new Perso();
	rocks = [];
	lasers = [];
	fill(50);
	stroke(255);
	strokeWeight(10);
	textSize(32);
	for (var i = 0; i < 10; i++) {
  		rocks[i] = new Rock(perso.pos);
  	}
}

function draw() {
	background(50);

  	var targetHits = 0;

 	for (var i = 0; i < lasers.length; i++) {
 		if (!perso.isHit)
 		{
 			lasers[i].render();
 	 		lasers[i].update();
 	 		for (var j = 0; j < rocks.length; j++) {
 	 			lasers[i].hits(rocks[j]);
 			}
 		}
 		if (lasers[i].isOffscreen())
 			lasers.splice(i, 1);
	}

  	for (var i = 0; i < rocks.length; i++) {
 	 	if (!rocks[i].isHit && !perso.isHit) {
 	 		perso.hits(rocks[i]);
  			rocks[i].render();
 			rocks[i].update();
 	 		rocks[i].edges();
 	 	} else {
 	 		targetHits += 1;
 	 	}
 	}

	perso.render();
	// perso.setScaling(random(-5, 5));
	perso.rescale();
  	perso.rotate();
  	perso.moveForward();
  	perso.moveSideways();
  	perso.edges();
	
	if (perso.isHit) {
		text("You Lost !", 10, 30);
	}
	else if (targetHits == 10) {
		text("You Won !", 10, 30);
	}

	if (keyIsDown(UP_ARROW))
		perso.setScaling(1);
	else if (keyIsDown(DOWN_ARROW))
		perso.setScaling(-1);
	else
		perso.setScaling(0);
	if (keyIsDown(90))
		perso.setForwardSpeed(5);
	else if (keyIsDown(83))
		perso.setForwardSpeed(-5);
	else
		perso.setForwardSpeed(0);
	if (keyIsDown(68))
	 	perso.setSideSpeed(5);
	else if (keyIsDown(81))
	 	perso.setSideSpeed(-5);
	 else
	 	perso.setSideSpeed(0);
}

function keyPressed() {
	if (key == ' ')
		lasers.push(new Laser(perso.pos, perso.direction));
}

function mousePressed() {
	if (mouseButton == 0)
  		perso.rotate();
	if (mouseButton == 0 || mouseButton == "left")
		lasers.push(new Laser(perso.pos, perso.direction));
}