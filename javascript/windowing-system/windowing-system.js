// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size (width, height){
    if (width){
        this.width = width;
    }
    else this.width = 80;

    if (height){
        this.height = height;
    }
    else this.height = 60;
    
}
Size.prototype.resize = function(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
}

export function Position (x, y){
    if(x){
        this.x = x;
    }
    else this.x = 0;

    if(y){
        this.y = y;
    }
    else this.y = 0;
}

Position.prototype.move = function (newX, newY){
    this.x = newX;
    this.y = newY;
}

export function ProgrammWindow(screenSize, size, position){
    this.screenSize = screenSize
    this.size = size
    this.position = position

    if (screenSize){
        this.screenSize = screenSize
    }
    else this.screenSize = 800, 600;
    
    if(size){
        this.size = size;
    }
    else this.size = Size;

    if(position){
        this.position = position;
    }
    else this.position = Position;
}
ProgrammWindow.prototype.newProgrammWindow = function (newScreensize, newSize, newPosition){
    this.screenSize = newScreensize;
    this.size = newSize;
    this.position = newPosition;

}

