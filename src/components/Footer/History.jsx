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
        <Button
          onClick={this.toggle}
          outline
          color="secondary"
          style={{ height: "65px", width: "65px", borderRadius: "50%" }}
        >
          <img
            src="https://img.icons8.com/windows/32/000000/time-machine.png"
            alt="icon7"
          />
        </Button>
        <h6>История</h6>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ position: "absolute", top: "15px", right: "15px" }}
        >
          <ModalHeader toggle={this.toggle}>
			<h6>История</h6>
		  </ModalHeader>
          <ModalBody>
            <img src="https://img.icons8.com/color/350/000000/time-machine.png" alt="icon10"/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export { History };
