import { v4 as uuidv4 } from 'uuid';

export type ExploreDirection = 'east' | 'south' | 'west' | 'north';

const MAX_SIZE = 40;

export class RoomsMapState {
  private roomMap = Array<Array<Room | undefined>>();
  currentX = 20;
  currentY = 20;
  current: Room;
  count = 0;

  constructor() {
    for (let i = 0; i < MAX_SIZE; i++) {
      this.roomMap.push(Array(MAX_SIZE).fill(undefined));
    }
    // insert current
    const current = {
      cordX: this.currentX,
      cordY: this.currentY,
      id: uuidv4(),
      current: true,
      portal: true,
    };
    current.current = true;
    this.current = current;
    this.roomMap[this.currentY][this.currentX] = current;
  }

  findBoundaries() {
    const matrix = this.roomMap;
    let left = matrix[0].length;
    let right = 0;
    let top = matrix.length;
    let bottom = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== undefined) {
          left = Math.min(left, i);
          right = Math.max(right, i);
          top = Math.min(top, j);
          bottom = Math.max(bottom, j);
        }
      }
    }
    return { left, right, top, bottom };
  }

  getMap(): Array<Array<Room | undefined>> {
    return this.roomMap;
  }

  explore(direction: ExploreDirection): Room {
    this.current.current = false;
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
    console.log(this.currentX, this.currentY);
    const foundRoom = this.roomMap[this.currentX][this.currentY];
    if (foundRoom) {
      this.current = foundRoom;
      foundRoom.current = true;
      return foundRoom;
    }

    const newRoom: Room = {
      id: uuidv4(),
      cordX: this.currentX,
      cordY: this.currentY,
      current: true,
    };
    this.count++;
    this.current = newRoom;

    this.roomMap[this.currentX][this.currentY] = newRoom;
    return newRoom;
  }

  print() {
    // print all, if undefined, print dash
    for (let i = 0; i < this.roomMap.length; i++) {
      for (let j = 0; j < this.roomMap[i].length; j++) {
        if (this.roomMap[i][j] !== undefined) {
          console.log(this.roomMap[i][j]);
        }
      }
    }
  }
}

export type Room = {
  id: string;
  current: boolean;
  cordX: number;
  cordY: number;
  flags?: Array<string>;
  portal?: boolean;
};
