import React from 'react';

const ColorRandomizer = ({ currentColor }) => {
  return (
    <div
      style={{
        backgroundColor: currentColor,
        height: 250,
        width: 250,
      }}
    ></div>
  );
};
