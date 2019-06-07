import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Button
            onClick={this.toggle}
            outline
            color="secondary"
            style={{
              height: "6em",
              width: "6em",
              borderRadius: "50%",
              margin: "10px"
            }}
          >
            <img
              src="https://img.icons8.com/windows/32/000000/time-machine.png"
              alt="icon7"
            />
          </Button>
          <h6>История</h6>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{
            position: "fixed",
            top: "15%",
            right: "0px",
            height: "600px",
            width: "38%"
          }}
        >
          <ModalHeader toggle={this.toggle}>
            <h6>История</h6>
          </ModalHeader>
          <ModalBody
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px"
            }}
          >
            <img
              src="https://ssl.gstatic.com/translate/history-illustration-1x.png"
              alt="icon10"
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export { History };
