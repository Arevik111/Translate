import React from "react";
import { Button, Fade } from "reactstrap";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "50px"
        }}
      >
        <div>
          <h5>Oпределить язык</h5>
        </div>

        <div style={{ position: "absolute", left: "30%" }}>
          <Fade in={!this.state.fadeIn}>
            <h5>Английский</h5>
          </Fade>
        </div>
        <div style={{ position: "absolute", left: "30%" }}>
          <Fade in={this.state.fadeIn}>
            <h5>Армянский</h5>
          </Fade>
        </div>

        <div style={{ position: "absolute", left: "48%" }}>
          <Button color="link" onClick={this.toggle}>
            <img
              src="https://img.icons8.com/metro/26/000000/sorting-arrows-horizontal.png"
              alt="icon4"
            />
          </Button>
        </div>

        <div style={{ position: "absolute", left: "60%" }}>
          <Fade in={!this.state.fadeIn}>
            <h5>Армянский</h5>
          </Fade>
        </div>
        <div style={{ position: "absolute", left: "60%" }}>
          <Fade in={this.state.fadeIn}>
            <h5>Английский</h5>
          </Fade>
        </div>
      </div>
    );
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
}
export { Language };
