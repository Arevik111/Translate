import React from 'react';
import { Button } from 'reactstrap';
//import Constants from './../../Constants.jsx';
//alert(Constants.userName);

class Header extends React.Component {
  render() {
    return (
      <div className="clearfix">
        <div className="float-left">
          <img src="https://img.icons8.com/windows/32/000000/menu.png" alt="icon1"/>
          <img src="https://static.avamd.info/s/i/u/ea/928x0_ea353bf735cdb1872112f312aecfcba3___png____6_edddc42c.jpg" width="100px" alt="icon2"/>
        </div>
        <div className="float-right">
          <img src="https://img.icons8.com/windows/32/000000/menu-2.png" alt="icon3"/>
          <Button color="secondary"	style={{height: "30px", width: "30px", borderRadius: "50%"}}>A</Button>
        </div>
      </div>
    );
  }
}

export { Header };
