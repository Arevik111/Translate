import React from "react";
import { Row, Col, Input, Button } from "reactstrap";
//import styles from './Style.module.css';

class TextArea extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="6" style={{ paddingLeft: "0", paddingRight: "0" }}>
          <div style={{ border: "1px solid gray", height: "12em" }}>
            <Row>
			  <Col sm='10'>
                <Input
                  type="textarea"
                  style={{ height: "6em", borderBottom: "none", borderRight: "none", fontSize: '25px' }}
				  placeholder='Введите текст'
                />
			  </Col>
			  <Col sm='2'>
				<Button color="link">x</Button>
			  </Col>
              <Col xs="9">
                <img
                  src="https://img.icons8.com/material/32/000000/microphone.png"
                  width="30px"
                  alt="icon5"
                />
              </Col>
              <Col xs="3">
                <span>1/5000 </span>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit.png"
                  width="20px"
                  alt="icon6"
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="6" style={{ paddingLeft: "0", paddingRight: "0" }}>
          <Input
            type="textarea"
            placeholder="Перевод"
            style={{ border: "1px solid gray", height: "7.7em",fontSize: '25px' }}
          />
          <Row>
            <Col xs="8" />
            <Col xs="4">
              <a href="https://translate.google.am/?hl=ru&tab=TT#view=home&op=translate&sl=auto&tl=ru">
                Отправить отзыв
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export { TextArea };