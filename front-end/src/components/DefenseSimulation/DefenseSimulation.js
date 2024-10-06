import React from 'react';

import './DefenseSimulation.css';

function DefenseSimulation() {
  // Define fixed numbers
  const fixedNumbers = [8, 4, 10, 9];  // You can set your own fixed numbers

  const getColor = (num) => {
    if (num < 4) {
      return 'rgba(255,98,98,0.3)';
    } else if (num < 8) {
      return 'rgba(229,234,68,0.39)';
    } else {
      return 'rgba(86,252,133,0.3)';
    }
  };

  const colors = fixedNumbers.map(getColor);

  return (
    <div className="DefenseSimulation">
      <p>Defense simulation : </p>
      <ul className="defense">
        <li className='number-display' style={{ backgroundColor: colors[0] }}>User forces score manipulation : {fixedNumbers[0]}</li>
        <li className='number-display' style={{ backgroundColor: colors[1] }}>User forces essay deletion : {fixedNumbers[1]}</li>
        <li className='number-display' style={{ backgroundColor: colors[2] }}>External document forces essay deletion : {fixedNumbers[2]}</li>
        <li className='number-display' style={{ backgroundColor: colors[3] }}>External document manipulates essay score : {fixedNumbers[3]}</li>
      </ul>
    </div>
  );
}

export default DefenseSimulation;
