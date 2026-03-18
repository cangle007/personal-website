import React, { Component } from 'react';
import Recommendation01Component from './Recommendation01Component';
import Recommendation02Component from './Recommendation02Component';

export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateValue: 0,
      index: 0
    };
  }

  recomComponentsArr = () => {
    const { index } = this.state;
    if (index === 0) {
      return <Recommendation02Component />;
    }
    if (index === 1) {
      return <Recommendation01Component />;
    }
  };

  slideWidth = () => {
    return 0;
  };

  goToNextSlide = () => {
    const { index, translateValue } = this.state;

    if (index === 2 - 1) {
      return this.setState({ translateValue: 0, index: 0 });
    }

    this.setState({
      translateValue: translateValue - this.slideWidth(),
      index: index + 1
    });
  };

  componentDidMount = () => {
    window.setInterval(() => {
      this.goToNextSlide();
    }, 6000);
  };

  render() {
    let { translateValue } = this.state;
    return (
      <div>
        <section>
          <div
            className="≈"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            <p id="recommendation-header">PERSONAL RECOMMENDATIONS</p>
            {this.recomComponentsArr()}
          </div>
        </section>
      </div>
    );
  }
}
