import React from "react";
import { Button, Fade, Row, Col } from "reactstrap";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <Row>
        <Col sm="2">
          <h5>Oпределить язык</h5>
        </Col>
        <Col sm="2">
          <Fade in={!this.state.fadeIn} tag="h5" className="mt-3">
            Английский
          </Fade>
        </Col>
        <Col sm="2">
          <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
            Армянский
          </Fade>
        </Col>
        <Col sm="2">
          <Button color="link" onClick={this.toggle}>
            <img
              src="https://img.icons8.com/metro/26/000000/sorting-arrows-horizontal.png"
              alt="icon4"
            />
          </Button>
        </Col>
        <Col sm="2">
          <Fade in={!this.state.fadeIn} tag="h5" className="mt-3">
            Армянский
          </Fade>
        </Col>
        <Col sm="2">
          <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
            Английский
          </Fade>
        </Col>
      </Row>
    );
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
}
export { Language };
