import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ariaExpanded: false
    };
  }

  // headerToggle = () => {
  //   //let { ariaExpanded } = this.state;
  //   this.setState(prevState => ({
  //     ariaExpanded: !prevState.ariaExpanded
  //   }));
  // };

  render() {
    // let { ariaExpanded } = this.state;
    return (
      <div className="header-container">
        <div className="header-grid">
          <div id="full-name-logo">
            <a id="logo-link">
              CANG <span id="lassName">LE</span>
            </a>
          </div>
          <div className="navi-grid" id="navi">
            <a id="navi-home" className="naviLink" href="#">
              Home
            </a>
            <a id="navi-about" className="naviLink" href="#">
              About
            </a>
            <a id="navi-contact" className="naviLink" href="#">
              Contact
            </a>
            <a id="navi-linkedIn" className="naviLink" href="#">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';
//
// export default class HeaderComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ariaExpanded: false
//     };
//   }
//
//   headerToggle = () => {
//     //let { ariaExpanded } = this.state;
//     this.setState(prevState => ({
//       ariaExpanded: !prevState.ariaExpanded
//     }));
//   };
//
//   render() {
//     let { ariaExpanded } = this.state;
//     return (
//       <div className="wrapper-header">
//         <div className="header-container">
//           <span id="logo">
//             <a id="logo-link">
//               CANG <span id="lassName">LE</span>
//             </a>
//           </span>
//           <nav className="nav">
//             <button
//               aria-expanded={ariaExpanded}
//               aria-controls="header-list"
//               onClick={this.headerToggle}>
//               {ariaExpanded ? (
//                 <span className="close">X</span>
//               ) : (
//                 <span className="open">☰</span>
//               )}
//             </button>
//             <ul id="header-list">
//               <a class="navLink" href="#">
//                 Home
//               </a>
//               <a class="navLink" href="#">
//                 About
//               </a>
//               <a class="navLink" href="#">
//                 Contact
//               </a>
//               <a class="navLink" href="#">
//                 Linkedin
//               </a>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     );
//   }
// }
