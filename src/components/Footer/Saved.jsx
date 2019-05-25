import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

class Saved extends React.Component {
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
          style={{ height: "4em", width: "4em", borderRadius: "50%" }}
        >
          <img
            src="https://img.icons8.com/windows/32/000000/filled-star.png"
            alt="icon8"
          />
        </Button>
        <h6>Сохранено</h6>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ position: "absolute", top: "15px", right: "15px" }}
        >
          <ModalHeader toggle={this.toggle}>Сохранено</ModalHeader>
          <ModalBody>
            <Row>
              <Col sm="2">
                <img src="https://img.icons8.com/android/24/000000/search.png" alt='search'/>
              </Col>
              <Col sm="8">
                <p>
                  Сортировать по: |
                  <img src="https://img.icons8.com/android/20/000000/sort-down.png" alt='sort-down'/>
                </p>
              </Col>
              <Col sm="2">
                <img src="https://img.icons8.com/material/24/000000/google-slides.png" alt='google-slides'/>
              </Col>
            </Row>
            <Row>
              <Col sm="8">Нет словосочетаний</Col>
              <Col sm="2">
                <img src="https://img.icons8.com/metro/20/000000/less-than.png" alt='less-than'/>
              </Col>
              <Col sm="2">
                <img src="https://img.icons8.com/metro/20/000000/more-than.png" alt='more-than'/>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <img src="https://img.icons8.com/color/300/000000/new-message.png" alt='new-message'/>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export { Saved };
