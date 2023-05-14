import { Room } from '@src/state';
import React from 'react';

export function RoomCell({ room }: { room?: Room }) {
  return (
    <div
      className={
        'room ' +
        (room ? 'room-cell ' : ' ') +
        (room?.current ? 'room-current' : '') +
        (room?.portal ? 'room-portal' : '')
      }
    ></div>
  );
}
