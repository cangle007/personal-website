import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import resume from '../images/resume.pdf';

export default function ResumeComponent() {
  return (
    <div className="resume-wrapper">
      <HeaderComponent />
      <div className="resume-container">
        <embed id="myResume" src={resume} width="800px" height="2100px" />
      </div>
      <FooterComponent />
    </div>
  );
}
