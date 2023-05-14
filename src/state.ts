import { v4 as uuidv4 } from 'uuid';

type direction = 'east' | 'south' | 'west' | 'north';

const MAX_SIZE = 40;

export class RoomsMapState {
  private roomMap = Array<Array<Room | undefined>>();
  currentX = 20;
  currentY = 20;

  constructor() {
    for (let i = 0; i < MAX_SIZE; i++) {
      this.roomMap.push(Array(MAX_SIZE).fill(undefined));
    }
    // insert current
    const current = new Room({
      cordX: this.currentX,
      cordY: this.currentY,
    });
    current.current = true;
    this.roomMap[this.currentX][this.currentY] = current;
  }

  getBounderies() {
    const matrix = this.roomMap;
    let maxHorizontal = 0;
    let maxVertical = 0;
    // Check horizontal non-undefined values
    for (let i = 0; i < matrix.length; i++) {
      let count = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== undefined) {
          count++;
        } else {
          count = 0;
        }
        maxHorizontal = Math.max(maxHorizontal, count);
      }
    }
    // Check vertical non-undefined values
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0;
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j] !== undefined) {
          count++;
        } else {
          count = 0;
        }
        maxVertical = Math.max(maxVertical, count);
      }
    }
    return { maxHorizontal, maxVertical };
  }

  getMap(): Array<Array<Room | undefined>> {
    return this.roomMap;
  }

  explore(direction: direction): Room {
    switch (direction) {
      case 'east':
        if (this.currentX < MAX_SIZE - 1) {
          this.currentX++;
        }
        break;
      case 'south':
        if (this.currentY < MAX_SIZE - 1) {
          this.currentY++;
        }
        break;
      case 'west':
        if (this.currentX > 0) {
          this.currentX--;
        }
        break;
      case 'north':
        if (this.currentY > 0) {
          this.currentY--;
        }
        break;
    }
    const foundRoom = this.roomMap[this.currentX][this.currentY];
    if (foundRoom) {
      foundRoom.current = true;
      return foundRoom;
    }

    const newRoom = new Room({
      cordX: this.currentX,
      cordY: this.currentY,
    });

    newRoom.current = true;
    this.roomMap[this.currentX][this.currentY] = newRoom;
    return newRoom;
  }
}

export class Room {
  id = uuidv4();
  flags: Array<string> = [];
  current = false;
  cordX: number;
  cordY: number;

  constructor({ cordX, cordY }: { cordX: number; cordY: number }) {
    this.cordX = cordX;
    this.cordY = cordY;
  }
}
