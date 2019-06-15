import React from "react";
import { Button } from "reactstrap";
import { ModalHistory } from "./ModalHistory";
import { ModalSaved } from "./ModalSaved";

const style = {
  height: "6em",
  width: "6em",
  borderRadius: "50%",
  margin: "10px",
  backgroundColor: "white"
};

class Footer extends React.Component {
  state = {
    isOpenHistory: false,
    isOpenSaved: false
  };

  openHistory = () => {
    this.setState({
      isOpenHistory: !this.state.isOpenHistory
    });
  };

  openSaved = () => {
    this.setState({
      isOpenSaved: !this.state.isOpenSaved
    });
  };

  render() {
    return (
      <div>
        <div className="styleF">
          <div className="footerContent">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Button
                onClick={this.openHistory}
                outline
                color="secondary"
                className="circle"
                style={style}
              >
                <img
                  src="https://img.icons8.com/windows/32/000000/time-machine.png"
                  alt="icon7"
                />
              </Button>
              <h6>История</h6>
            </div>
          </div>
          {this.state.isOpenHistory && (
            <ModalHistory onClick={this.openHistory} />
          )}
          <div className="footerContent">
            <div className="styleS">
              <Button
                onClick={this.openSaved}
                outline
                color="secondary"
                style={style}
              >
                <img
                  src="https://img.icons8.com/windows/32/000000/filled-star.png"
                  alt="icon8"
                />
              </Button>
              <h6>Сохранено</h6>
            </div>
          </div>
          {this.state.isOpenSaved && <ModalSaved onClick={this.openSaved} />}
          <div className="footerContent">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <a href="https://translate.google.am/community?source=mfooter">
                <Button outline color="secondary" style={style}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/group-foreground-selected.png"
                    alt="icon9"
                  />
                </Button>
              </a>
              <h6>Сообщества</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Footer };
