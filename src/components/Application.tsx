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

  const restartMap = () => {
    if (window.confirm('Are you sure you want to restart?')) {
      setRoomsMap(undefined);
      setMoves(0);
    }
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
      <Navigate onNavigate={onNavigate} />
      <RoomsMap roomsMap={roomsMap} />
      {!!moves && <p>You moved {moves} times</p>}
      <button onClick={restartMap}>Restart</button>
    </div>
  );
};

export default Application;
