import React from 'react';
import outside2inside from '../images/outside2inside.png';
import wellsfargo01 from '../images/wellsfargo01.png';
import sunedison from '../images/sunedison.png';
import veritas from '../images/veritas.png';
import cgigroup from '../images/cgigroup.png';

export default function CompaniesWorkedComponent() {
  return (
    <div className="companies-wrapper">
      <p>COMPANIES I'VE WORKED WITH</p>
      <div className="companies-container">
        <div className="cgi">
          <img alt="cgigroup" src={cgigroup} />
        </div>
        <div className="sunedison">
          <img alt="sunedison" src={sunedison} />
        </div>
        <div className="veritas">
          <img alt="veritas" src={veritas} />
        </div>
        <div className="wellsfargo01">
          <img alt="wellsfargo01" src={wellsfargo01} />
        </div>
        <div className="outside2inside">
          <img alt="outside2inside" src={outside2inside} />
        </div>
      </div>
    </div>
  );
}
