import { ExploreDirection, RoomsMapState } from '@src/state';
import React, { useEffect, useState } from 'react';
import './Application.scss';
import { Navigate } from './Navigate';
import { RoomsMap } from './RoomsMap';

const Application: React.FC = () => {
  const [roomsMap, setRoomsMap] = useState<RoomsMapState>();
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setRoomsMap(new RoomsMapState());
  }, []);

  const startVaultMap = () => {
    setRoomsMap(new RoomsMapState());
  };

  const onNavigate = (path: ExploreDirection) => {
    roomsMap?.explore(path);
    setMoves(moves + 1);
    console.log(roomsMap?.findBoundaries());
  };

  return (
    <div>
      {roomsMap && <Navigate onNavigate={onNavigate} />}
      {roomsMap && <RoomsMap roomsMap={roomsMap} />}
      {!roomsMap && <button onClick={startVaultMap}>Start</button>}
      {!!moves && <h1>You moved {moves} times</h1>}
    </div>
  );
};

export default Application;
