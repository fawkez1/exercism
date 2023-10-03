// @ts-check
/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
	constructor(width = 80, height = 60) {
		this.width = width;
		this.height = height;
	}

	resize(newWidth, newHeight) {
		this.width = newWidth;
		this.height = newHeight;
	}
}


// Definition der Position-Klasse
export class Position {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	move(newX, newY) {
		this.x = newX;
		this.y = newY;
	}
}

// Definition der ProgrammWindow-Klasse
export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600);
		this.size = new Size(); // Erstellen einer Instanz der Size-Klasse
		this.position = new Position(); // Erstellen einer Instanz der Position-Klasse
	}
	resize(newSize) {
		// minimum height
		if (newSize.height < 1) {
			newSize.height = 1;
		}
		// maximum height by screensize
		else if (newSize.height > this.screenSize.height) {
			newSize.height = this.screenSize.height;
		}
		// maximum height by position
		else if (newSize.height > (this.screenSize.height - this.position.y)) {
			(newSize.height = (this.screenSize.height - this.position.y))
		}
		// minumum width
		if (newSize.width < 1) {
			newSize.width = 1;
		}
		// maximum width by screensize
		else if (newSize.width > this.screenSize.width) {
			newSize.width = this.screenSize.width;
		}
		// maximum width by position
		else if (newSize.width > (this.screenSize.width - this.position.x)) {
			newSize.width = (this.screenSize.width - this.position.x);
		}

		this.size = newSize;
	}


	move(newPosition) {
		// x-Position
		if (newPosition.x < 0) {
			newPosition.x = 0;
		}
		else if (newPosition.x > (this.screenSize.width - this.size.width)) {
			newPosition.x = (this.screenSize.width - this.size.width);
		}

		// y-Position
		if (newPosition.y < 0) {
			newPosition.y = 0;
		}
		else if (newPosition.y > (this.screenSize.height - this.size.height)) {
			newPosition.y = (this.screenSize.height - this.size.height);
		}

		// final 
		this.position = newPosition;
	}
}
// Erstellung einer Instanz der ProgramWindow-Klasse
export const newProgramWindow = new ProgramWindow();