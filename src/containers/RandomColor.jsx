import React, { Component } from 'react';
import ShowColor from '../components/random-color/ShowColor';
import ShowAngryBaby from '../components/random-color/AngryBaby';
class RandomColor extends Component {
  state = {
    currentColor: 'blue',
    prevColor: '',
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        prevColor: this.state.currentColor,
        currentColor: this.getRandomColor(),
      });
      if (this.state.currentColor === this.state.prevColor)
        this.setState({ currentColor: 'angry-baby' });
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

  isBabyAngry() {
    if (this.state.currentColor === 'angry-baby') {
      return <ShowAngryBaby />;
    }
    return <ShowColor currentColor={this.state.currentColor} />;
  }

  render() {
    return (
      <>
        <h1>Totally Random Colors!</h1>
        {this.isBabyAngry()}
      </>
    );
  }
}

export default RandomColor;
