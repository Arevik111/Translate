import React from "react";
import "./Account.css";
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Col,
  Row,
  Container
} from "reactstrap";
import { Button } from "reactstrap";

class Account extends React.Component {
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
      <Container className="account">
        <Nav>
          <Dropdown
            nav
            isOpen={this.state.dropdownOpen}
            placement="top"
            toggle={this.toggle}
          >
            <DropdownToggle
              nav
              faded="true"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <Button
                color="secondary"
                style={{
                  height: "2.3em",
                  width: "2.3em",
                  borderRadius: "50%",
                  backgroundColor: "#212529"
                }}
              >
                A
              </Button>
            </DropdownToggle>
            <DropdownMenu
              style={{
                width: "25em",
                position: "absolute",
                left: "-18em"
              }}
            >
              <DropdownItem>
                <Row>
                  <Col sm="3">
                    <Button
                      color="secondary"
                      style={{
                        height: "3.6em",
                        width: "3.6em",
                        borderRadius: "50%"
                      }}
                    >
                      A
                    </Button>
                  </Col>

                  <Col sm="7">
                    <h6>Arevik Gharagyozyan</h6>
                    <h6 style={{ fontSize: "12px" }}>
                      arevikgharagyozyan@gmail.com
                    </h6>
                    <h6>Конфиденциальность</h6>
                    <Button color="primary">Aккаунт Google</Button>{" "}
                  </Col>
                </Row>
                <DropdownItem divider />
              </DropdownItem>

              <DropdownItem footer>
                <Row>
                  <Col xs="8" />
                  <Col xs="4">
                    <Button color="secondary" style={{ margin: "0px" }}>
                      Выйти
                    </Button>
                  </Col>
                </Row>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Container>
    );
  }
}
export { Account };
