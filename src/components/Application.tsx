import { RoomsMapState } from '@src/state';
import React, { useEffect, useState } from 'react';
import './Application.scss';
import { RoomsMap } from './RoomsMap';

const Application: React.FC = () => {
  const [roomsMap, setRoomsMap] = useState<RoomsMapState>();

  useEffect(() => {
    setRoomsMap(new RoomsMapState());
  }, []);

  const startVaultMap = () => {
    setRoomsMap(new RoomsMapState());
  };

  return (
    <div>
      {roomsMap && <RoomsMap roomsMap={roomsMap} />}
      {!roomsMap && <button onClick={startVaultMap}>Start</button>}
    </div>
  );
};

export default Application;
