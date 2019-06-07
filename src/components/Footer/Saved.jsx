import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

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
              src="https://img.icons8.com/windows/32/000000/filled-star.png"
              alt="icon8"
            />
          </Button>
          <h6>Сохранено</h6>
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
            <h1>Сохранено</h1>
          </ModalHeader>
          <ModalBody>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <img
                    src="https://img.icons8.com/android/24/000000/search.png"
                    alt="search"
                  />
                </div>
                <div>
                  <p>
                    Сортировать по: |
                    <img
                      src="https://img.icons8.com/android/20/000000/sort-down.png"
                      alt="sort-down"
                    />
                  </p>
                </div>
                <div>
                  <img
                    src="https://ssl.gstatic.com/images/icons/material/system/1x/drive_spreadsheet_grey600_18dp.png"
                    alt="google-slides"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div>Нет словосочетаний</div>
                <div>
                  <img
                    src="https://img.icons8.com/metro/20/000000/less-than.png"
                    alt="less-than"
                  />
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/metro/20/000000/more-than.png"
                    alt="more-than"
                  />
                </div>
              </div>
              <div>
                {" "}
                <hr />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px"
                }}
              >
                <div>
                  <img
                    src="https://ssl.gstatic.com/translate/empty_phrasebook.png"
                    alt="new-message"
                  />
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export { Saved };
