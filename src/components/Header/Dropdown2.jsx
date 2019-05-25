import React from "react";
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Col,
  Row
} from "reactstrap";
import { Button } from "reactstrap";

class Dropdown2 extends React.Component {
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
            <DropdownToggle nav faded='true'>
              <Button color="secondary" style={{ borderRadius: "50%" }}>
                <img
                  src="https://image.flaticon.com/icons/svg/54/54917.svg"
                  width="13px"
                  alt="icon2"
                />
              </Button>
            </DropdownToggle>

            <DropdownMenu
              style={{
                height: "24em",
                width: "21em",
                position: "absolute",
                left: "-10em"
              }}
            >
              <DropdownItem>
                <Row>
                  <Col sm="4">
                    <Button
                      color="secondary"
                      style={{
                        height: "3.3em",
                        width: "3.3em",
                        borderRadius: "50%"
                      }}
                    >
                      A
                    </Button>
                    <h6>Aккаунт</h6>
                  </Col>

                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/google-logo.png" alt='goolle-logo'/>
                    <h6>Поиск</h6>
                  </Col>

                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/google-play.png" alt='google-play'/>
                    <h6>Play</h6>
                  </Col>
                </Row>
              </DropdownItem>

              <DropdownItem>
                <Row>
                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/gmail-login.png" alt='gmail-login'/>
                    <h6>Почта</h6>
                  </Col>
                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/google-groups.png" alt='google-groups'/>
                    <h6>Kонтакти</h6>
                  </Col>
                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/google-drive.png" alt='google-drive'/>
                    <h6>Диск</h6>
                  </Col>
                </Row>
              </DropdownItem>
              <DropdownItem>
                <Row>
                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/calendar-31.png" alt='calendar-31'/>
                    <h6>Календарь</h6>
                  </Col>
                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/google-translate.png" alt='google-translate'/>
                    <h6>Переводчик</h6>
                  </Col>
                  <Col sm="4">
                    <img src="https://img.icons8.com/color/60/000000/google-photos.png" alt='google-photos'/>
                    <h6>Фото</h6>
                  </Col>
                </Row>
              </DropdownItem>
              <DropdownItem footer>
                <h3>Ещё</h3>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}
export { Dropdown2 };
