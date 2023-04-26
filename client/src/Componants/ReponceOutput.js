import React from 'react';

export default function ResponseOutput(props) {
  const response = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
      <div style={{ width: '800px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Object.keys(response).slice(0, 3).map((step) => (
            <div key={step} style={{ width: '33%', padding: '10px' }}>
              <h3>Step {step}</h3>
              <p>Carry String: {response[step].carryString}</p>
              <p>Sum String: {response[step].sumString}</p>
            </div>
          ))}
          {Object.keys(response).slice(3).map((step) => (
            <div key={step} style={{ width: '33%', padding: '10px' }}>
              <h3>Step {step}</h3>
              <p>Carry String: {response[step].carryString}</p>
              <p>Sum String: {response[step].sumString}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
