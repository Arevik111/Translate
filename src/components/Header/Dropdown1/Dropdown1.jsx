import React from "react";
import { Dropdown2 } from "../Dropdown2/Dropdown2";
import "./Dropdown1.css";

import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

const style = { margin: "1.2em" };
class Dropdown1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav>
          <Dropdown
            nav
            isOpen={this.state.dropdownOpen}
            direction="down"
            toggle={this.toggle}
          >
            <DropdownToggle nav faded="true">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGEyHZgs4micyzGtAQDqrzJaVDuRpSVmRY7tbtBTmFrk7BzP1"
                width="30px"
                alt="icon2"
              />
            </DropdownToggle>

            <DropdownMenu
              style={{
                height: "48em",
                width: "18em",
                position: "absolute",
                left: "-1.8em"
              }}
            >
              <DropdownItem className="dropdown22" header style={style}>
                <Dropdown2 />
              </DropdownItem>
              <DropdownItem style={style}>О Переводчике google </DropdownItem>
              <DropdownItem style={style}>Сообщества</DropdownItem>
              <DropdownItem divider />
              <DropdownItem style={style}>Правила и Принципы</DropdownItem>
              <DropdownItem style={style}>Справка</DropdownItem>
              <DropdownItem style={style}>Отправить отзыв</DropdownItem>
              <DropdownItem style={style}>О Google</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}
export { Dropdown1 };
