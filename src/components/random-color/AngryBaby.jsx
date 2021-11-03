import React from 'react';
import angryBaby from '../../assets/angryBaby.png';

const ShowAngryBaby = () => {
  return (
    <figure>
      <img
        src={angryBaby}
        alt="angry baby meme"
        style={{ height: 250, width: 250 }}
      ></img>
    </figure>
  );
};

export default ShowAngryBaby;
