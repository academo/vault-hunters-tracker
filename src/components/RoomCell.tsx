import { Room } from '@src/state';
import React from 'react';

export function RoomCell({ room }: { room: Room }) {
  return <div className={room.current ? 'room-current' : ''}>{room.id}</div>;
}
