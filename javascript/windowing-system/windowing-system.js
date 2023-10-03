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
		this.size = new Size(); // Create an instance of the Size class
		this.position = new Position(); // Create an instance of the Position class
	}

	resize(newDimensions) {
		// Ensure minimum height and width
		newDimensions.height = Math.max(1, newDimensions.height);
		newDimensions.width = Math.max(1, newDimensions.width);

		// Limit height by screensize
		newDimensions.height = Math.min(newDimensions.height, this.screenSize.height);

		// Limit height by position
		newDimensions.height = Math.min(
			newDimensions.height,
			this.screenSize.height - this.position.y
		);

		// Limit width by screensize
		newDimensions.width = Math.min(newDimensions.width, this.screenSize.width);

		// Limit width by position
		newDimensions.width = Math.min(
			newDimensions.width,
			this.screenSize.width - this.position.x
		);

		this.size = newDimensions;
	}

	move(newPosition) {
		// Limit x-Position
		newPosition.x = Math.max(0, newPosition.x);
		newPosition.x = Math.min(
			newPosition.x,
			this.screenSize.width - this.size.width
		);

		// Limit y-Position
		newPosition.y = Math.max(0, newPosition.y);
		newPosition.y = Math.min(
			newPosition.y,
			this.screenSize.height - this.size.height
		);

		// Update final position
		this.position = newPosition;
	}
}

// Create an instance of the ProgramWindow class
export const newProgramWindow = new ProgramWindow();