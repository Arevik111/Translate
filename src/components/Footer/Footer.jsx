import React from "react";
import { Row, Col } from "reactstrap";
import { History } from "./History";
import { Saved } from "./Saved";
import { Community } from "./Community";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "30px",
          paddingTop: "30px"
        }}
      >
        <Row>
          <Col sm="4">
            <History />
          </Col>
          <Col sm="4">
            <Saved />
          </Col>
          <Col sm="4">
            <Community />
          </Col>
        </Row>
      </div>
    );
  }
}

export { Footer };
