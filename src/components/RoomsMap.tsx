import React from 'react';
import { RoomsMapState } from '@src/state';
import { RoomCell } from './RoomCell';
export function RoomsMap({ roomsMap }: { roomsMap: RoomsMapState }) {
  const matrix = roomsMap.getMap();
  return (
    <div className='room-map'>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className='room-cell'>
              {cell !== undefined ? <RoomCell room={cell} /> : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
