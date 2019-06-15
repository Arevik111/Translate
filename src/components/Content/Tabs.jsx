import React from "react";
import "./Tabs.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { Language } from "./Language";
import { TextArea } from "./TextArea";
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="content">
        <hr className="line" />
        <Nav tabs>
          <NavItem className="tabs">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <Button
                color="light text-primary"
                style={{
                  backgroundColor: "rgba(66,133,244,0.12)",
                  fontWeight: "500"
                }}
              >
                <img
                  src="https://ssl.gstatic.com/translate/ic_translate_googblue600_20dp.svg"
                  alt="google-translate"
                />{" "}
                Текст
              </Button>
            </NavLink>
          </NavItem>
          <NavItem className="tabs">
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <Button
                outline
                color="primary"
                style={{
                  backgroundColor: "rgba(66,133,244,0.12)",
                  color: "#1a73e8",
                  fontWeight: "500"
                }}
                className="tabsbtn"
              >
                <img
                  src="https://img.icons8.com/material/24/000000/file.png"
                  alt="icon10"
                />
                Документы
              </Button>{" "}
            </NavLink>
          </NavItem>
        </Nav>
        <hr className="line" />
        <Language />
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <TextArea />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <hr />
            <Row>
              <Col>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <h4>Выберите документ</h4>
                  <p>
                    Загрузите файл в одном из следующих форматов: DOC, DOCX,
                    ODF, PDF, PPT, PPTX, PS, RTF, TXT, XLS, XLSX
                  </p>
                  <Button color="primary">Выбрать на компьютере</Button>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export { Tabs };
