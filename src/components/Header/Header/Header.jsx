import React from "react";
import { Dropdown1 } from "../Dropdown1/Dropdown1";
import { Dropdown2 } from "../Dropdown2/Dropdown2";
import { Account } from "../Account/Account";
import { Google } from "../Google/Google";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerOne">
          <div>
            <Dropdown1 />
          </div>
          <div>
            <Google />
          </div>
        </div>
        <div className="headerOne">
          <div className="headerTwo" className="dropdown2">
            <Dropdown2 />
          </div>
          <div className="headerTwo">
            <Account />
          </div>
        </div>
      </div>
    );
  }
}

export { Header };
