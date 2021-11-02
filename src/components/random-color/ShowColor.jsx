import React from 'react';

const ShowColor = ({ currentColor }) => {
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

export default ShowColor;
