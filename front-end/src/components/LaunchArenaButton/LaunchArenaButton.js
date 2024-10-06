import React from 'react';
import './LaunchArenaButton.css';

function LaunchArenaButton({ onClick }) {
  return (
    <div className="LaunchArenaButton">
      <button id="launch-arena-button" onClick={onClick}>Consultation</button>
    </div>
  );
}

export default LaunchArenaButton;
