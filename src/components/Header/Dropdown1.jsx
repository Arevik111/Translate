import React from "react";
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

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
              <DropdownItem header style={{ margin: "1.2em" }}>
                О Переводчике google{" "}
              </DropdownItem>
              <DropdownItem style={{ margin: "1.2em" }}>
                Сообщества
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem style={{ margin: "1.2em" }}>
                Правила и Принципы
              </DropdownItem>
              <DropdownItem style={{ margin: "1.2em" }}>Справка</DropdownItem>
              <DropdownItem style={{ margin: "1.2em" }}>
                Отправить отзыв
              </DropdownItem>
              <DropdownItem style={{ margin: "1.2em" }}>О Google</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}
export { Dropdown1 };
