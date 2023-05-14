import { ExploreDirection, RoomsMapState } from '@src/state';
import React, { useState } from 'react';
import './Application.scss';
import { Navigate } from './Navigate';
import { RoomsMap } from './RoomsMap';

const Application: React.FC = () => {
  const [roomsMap, setRoomsMap] = useState<RoomsMapState>();
  const [moves, setMoves] = useState(0);

  const startVaultMap = (path: ExploreDirection) => {
    setRoomsMap(new RoomsMapState(path));
  };

  const onNavigate = (path: ExploreDirection) => {
    roomsMap?.explore(path);
    setMoves(moves + 1);
    console.log(roomsMap?.findBoundaries());
  };

  if (!roomsMap) {
    return (
      <div>
        <h1>Welcome to Vault Hunters Tracker</h1>
        <p>Select the starting direction of your portal</p>
        <Navigate onNavigate={startVaultMap} />
      </div>
    );
  }

  return (
    <div>
      {roomsMap && <Navigate onNavigate={onNavigate} />}
      {roomsMap && <RoomsMap roomsMap={roomsMap} />}
      {!!moves && <p>You moved {moves} times</p>}
    </div>
  );
};

export default Application;
