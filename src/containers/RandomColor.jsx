import React, { Component } from 'react';

class RandomColor extends Component {
  state = {
    currentColor: 'blue',
    // prevColor: 'brown',
  };

  // handleColorChange = (color, prevColor) => {
  //   this.setState({ currentColor: color, prevColor: prevColor });
  // };
  // add some sort of set interval?

  render() {
    const colors = [
      'aqua',
      'azure',
      'blue',
      'brown',
      'chartreuse',
      'coral',
      'green',
      'firebrick',
      'grey',
      'yellow',
      'turquoise',
    ];

    return (
      <>
        <h1>Totally Random Colors!</h1>
      </>
    );
  }
}

export default RandomColor;
