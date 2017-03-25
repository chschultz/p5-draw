/*
 * Kreisobjekt
 *
 * author: Christoph Schultz
 * date: 2017 / 03 / 24
 */

function Circle(x, y, r, color) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = color;
	this.phi;

	this.show = function () {
		noStroke(); // keine Kontur
		fill(this.color);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}

	this.getX = function () {
		return this.x;
	}

	this.setX = function (x) {
		this.x = x;
	}

	this.getY = function () {
		return this.y;
	}

	this.setY = function (y) {
		this.y = y;
	}

	this.getR = function () {
		return this.r;
	}

	this.setR = function (r) {
		this.r = r;
	}

	this.getColor = function () {
		return this.color;
	}

	this.setColor = function (color) {
		this.color = color;
	}

	this.getPhi = function () {
		return this.phi;
	}

	this.setPhi = function (phi) {
		this.phi = phi;
	}
}
