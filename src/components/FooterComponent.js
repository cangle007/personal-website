import React, { Component } from 'react';

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-grid">
          <div id="footer-connect">
            <p>CONNECT</p>
            <ul>
              <li>
                <a id="test" href="#">
                  Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cangle/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/cangle007">GitHub</a>
              </li>
            </ul>
          </div>
          <div id="footer-create">
            <p>CREATE</p>
            <ul>
              <li>
                "Perfection is achieved, not when there <br /> is nothing more
                to add, but when there is nothing <br />left to take away."
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
//
// export default class FooterComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//
//   render() {
//     return (
//       <div>
//         <footer className="wrapper-footer">
//           <div className="connect">
//             <p>CONNECT</p>
//             <ul>
//               <li>
//                 <a href="#">Email</a>
//               </li>
//               <li>
//                 <a href="https://www.linkedin.com/in/cangle/">Linkedin</a>
//               </li>
//               <li>
//                 <a href="https://github.com/cangle007">Github</a>
//               </li>
//             </ul>
//           </div>
//           <div className="create">
//             <p>CREATE</p>
//             <p>
//               "Perfection is achieved, not when there <br /> is nothing more to
//               add, but when there is nothing <br />left to take away."
//             </p>
//           </div>
//         </footer>
//       </div>
//     );
//   }
// }
