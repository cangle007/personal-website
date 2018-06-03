import React, { Component } from 'react';

export default class RecommendationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="wrapper-recommendation">
          <div className="inner">
            <p>PERSONAL RECOMMENDATIONS</p>
            <p id="recommendations-par">
              "Cang is self motivated and willing to contribute at the drop of a
              hat. It is a pleasure working with Cang as he is always ready to
              learn and contribute on any task or functions. Cang's
              contributions go beyond finance and accounting to include
              day-to-day operations, assessment and due diligence of prospect
              companies, meeting coordination and planning to deal flow
              coordination. Cang has demonstrated immense enthusiasm,
              willingness to learn and outstanding follow through on every
              assignment handed to him. Cang is an outstanding team member of
              South Valley Angels."
            </p>
            <h3>Gary Jinks</h3>
            <p id="recon-name">Managing Director at South Valley Angles</p>
          </div>
        </section>
      </div>
    );
  }
}
