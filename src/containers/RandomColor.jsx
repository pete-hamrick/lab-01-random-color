import React, { Component } from 'react';
import ShowColor from '../components/random-color/ShowColor';
class RandomColor extends Component {
  state = {
    currentColor: 'blue',
    // prevColor: 'brown',
  };

  componentDidMount = (color) => {
    this.myInterval = setInterval(() => {
      this.setState({ currentColor: this.getRandomColor() });
    }, 1000);
  };

  getRandomColor() {
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
    const randomColor = Math.floor(Math.random() * colors.length);
    return `${colors[randomColor]}`;
  }

  render() {
    return (
      <>
        <h1>Totally Random Colors!</h1>
        <ShowColor currentColor={this.state.currentColor} />
      </>
    );
  }
}

export default RandomColor;
