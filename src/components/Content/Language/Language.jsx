import React from "react";
import { Button, Fade } from "reactstrap";
import "./Language.scss";

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div className="panelLang">
        <div className="checkLang">
          <h5>Oпределить язык</h5>
        </div>

        <div className="lang1">
          <Fade in={!this.state.fadeIn}>
            <h5>Английский</h5>
          </Fade>
        </div>
        <div className="lang1">
          <Fade in={this.state.fadeIn}>
            <h5>Армянский</h5>
          </Fade>
        </div>

        <div className="arrow">
          <Button color="link" onClick={this.toggle}>
            <img
              src="https://img.icons8.com/metro/26/000000/sorting-arrows-horizontal.png"
              alt="icon4"
            />
          </Button>
        </div>

        <div className="lang2">
          <Fade in={!this.state.fadeIn}>
            <h5>Армянский</h5>
          </Fade>
        </div>
        <div className="lang2">
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
