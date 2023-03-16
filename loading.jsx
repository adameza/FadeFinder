import React from 'react';
import './StartupAnimation.css';

function BarberPole({ numUnits, ballColor, coverColor }) {
  const unitStyles = ['mono', 'vary'];
  
  return (
    <div className="flex-container">
      {[...Array(numUnits)].map((_, i) => (
        <div className="unit" key={`unit-${i + 1}`}>
          <div className={`pole-unit ${unitStyles[i % 2]}`}>
            <div className="pole-top">
              <div className="ball" style={{ backgroundColor: ballColor }}></div>
              <div className="cover" style={{ backgroundColor: coverColor }}></div>
              <div className="band"></div>
              <div className="thin-band"></div>
            </div>
            <div className="pole-middle">
              <div className="container">
                <div className="pole" style={{ backgroundColor: coverColor }}></div>
              </div>
            </div>
            <div className="pole-bottom">
              <div className="thin-band"></div>
              <div className="band"></div>
              <div className="cover" style={{ backgroundColor: coverColor }}></div>
              <div className="ball" style={{ backgroundColor: ballColor }}></div>
            </div>
          </div>
          <div className="shadow"></div>
        </div>
      ))}
    </div>
  );
}

BarberPole.defaultProps = {
  numUnits: 1,
  ballColor: '#ff5050',
  coverColor: '#0099cc'
};

export default BarberPole;
