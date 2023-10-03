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
    resize (newSize){
        if (newSize.height < 1){
            newSize.height = 1;
        }
        else if (newSize.height > this.screenSize.height){
            newSize.height = this.screenSize.height;
        }

        if (newSize.width < 1){
            newSize.width = 1;
        }
        else if(newSize.width > this.screenSize.width){
            newSize.width = this.screenSize.width;
        }
        this.size = newSize;
}


    move(newPosition){
        // x-Position
        if(newPosition.x < 0){
           newPosition.x = 0;
        }
        
        // y-Position
        if(newPosition.y < 0){
            newPosition.y = 0;
        }
        
        // final 
        this.position = newPosition;
    }
}
// Erstellung einer Instanz der ProgramWindow-Klasse
export const newProgramWindow = new ProgramWindow();









