/*
 *
 * author: Christoph Schultz
 * date: 2017 / 03 / 24
 *
 */

var holeQuant; // Lochanzahl
var holeRadius; //Lochradius
var holeColor; //Lochfarbe
var holes; // Speicher für Lochobjekte
var distanceToCenter; // Prozentualer Abstand zur Mitte
var dista; // Absoluter Abstand zur Mitte
var circle; // Scheibe
var cRadius; // Scheibenradius
var mid; // Mittelpunkt
var speed; // Drehgeschwindigkeit

var animate; // Schalter Animation

function setup() {
	height = 600; // Höhe Zeichenfläche
	width = 600; // Breite Zeichenfläche
	createCanvas(height, width);

	this.holeQuant = 12;
	this.holeRadius = 25;
	this.holeColor = color(51);
	this.holes = [];
	this.distanceToCenter = 0.825; // in Prozent
	this.speed = 0.01;

	translate(width / 2, height / 2); // zeichne relativ zur Mitte
	initial();

	mouseClicked(toggleAnimation);
	this.animate = false;
}

function draw() {
	background(51);

	updateAll(); // aktualisiere Zeichenfläche

	// drehe Lochscheibe
	if (this.animate == true) {
		rotateHoles(); // Animation
	}
}

/*
 * zeichne Initialzustand
 */
function initial() {
	// Lochscheibe
	this.cRadius = min(width, height) * 0.9 / 2;
	this.circle = new Circle(
			0,
			0,
			this.cRadius,
			color(255, 255, 255));

	this.mid = new Circle(
			0,
			0,
			this.cRadius * 0.01,
			color(76, 153, 0));

	// generiere Loecher
	this.dista = this.cRadius * distanceToCenter; // absoluter Abstand zur Mitte

	for (var phi = 0; phi < TWO_PI; phi += TWO_PI / holeQuant) {
		// berechne Mittelpunkte der Loecher
		var x = this.dista * cos(phi);
		var y = this.dista * sin(phi); ;

		// erstelle Lochobjekte
		var h = new Circle(x, y, this.holeRadius, this.holeColor);
		h.setPhi(phi);
		this.holes.push(h);
	}
}

/*
 * zeichne Scheibe, Loecher und Mitelpunkt
 */
function updateAll() {
	this.circle.show();
	this.mid.show();
	for (var i = 0; i < this.holes.length; i++) {
		this.holes[i].show();
	}
}

/*
 * drehe Lochscheibe
 */
function rotateHoles() {
	for (var i = 0; i < this.holes.length; i++) {
		var phi = this.holes[i].getPhi();
		phi += this.speed;
		if (phi >= TWO_PI) {
			phi = phi - TWO_PI;
		}

		var newX = this.dista * cos(phi);
		var newY = this.dista * sin(phi);

		this.holes[i].setX(newX);
		this.holes[i].setY(newY);
		this.holes[i].setPhi(phi);
	}
}

/*
 * Starte/Stoppe Animation
 */
function toggleAnimation() {
	this.animate = !(this.animate);
}

/*
 * Maus-Klickevent-Handling
 */
function mouseClicked() {
	toggleAnimation()
}
