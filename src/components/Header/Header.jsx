import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Dropdown1 } from "./Dropdown1";
import { Dropdown2 } from "./Dropdown2";
import { Account } from "./Account";

class Header extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="1">
            <Dropdown1 />
          </Col>

          <Col sm="9">
            <a href="http://localhost:3000/">
              <img
                src="https://static.avamd.info/s/i/u/ea/928x0_ea353bf735cdb1872112f312aecfcba3___png____6_edddc42c.jpg"
                width="100px"
                alt="icon2"
              />
            </a>
          </Col>

          <Col sm="1">
            <Dropdown2 />
          </Col>

          <Col sm="1">
            <Account />
          </Col>
        </Row>
      </Container>
    );
  }
}

export { Header };
