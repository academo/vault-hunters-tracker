import React from 'react';
import { RoomsMapState } from '@src/state';
import { RoomCell } from './RoomCell';
export function RoomsMap({ roomsMap }: { roomsMap: RoomsMapState }) {
  const matrix = roomsMap.getMap();
  const boundaries = roomsMap.findBoundaries();
  return (
    <div className='room-map'>
      {Array.from(
        { length: boundaries.bottom - boundaries.top + 1 },
        (_, y) => y + boundaries.top,
      ).map((y) => (
        <div className='row' key={y}>
          {Array.from(
            { length: boundaries.right - boundaries.left + 1 },
            (_, x) => x + boundaries.left,
          ).map((x) => (
            <RoomCell key={`${y}-${x}`} room={matrix[x][y]} />
          ))}
        </div>
      ))}
    </div>
  );
}
