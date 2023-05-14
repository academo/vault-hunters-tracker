import React from 'react';

export function Navigate({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  return (
    <div className={'navigate-buttons'}>
      <button onClick={() => onNavigate('north')}>North</button>
      <div style={{ display: 'flex' }}>
        <button onClick={() => onNavigate('west')}>West</button>
        <button onClick={() => onNavigate('east')}>East</button>
      </div>
      <button onClick={() => onNavigate('south')}>South</button>
    </div>
  );
}
