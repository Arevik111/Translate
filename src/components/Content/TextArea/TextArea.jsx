import React, { Fragment } from "react";
import { Input } from "reactstrap";
import { Addlanguage } from "../Addlanguage/Addlanguage";
import { Delete } from "../Delete/Delete";
import { InputText } from "../InputText/InputText";
import "./TextArea.css";

class TextArea extends React.Component {
  state = {
    data_name1: 1,
    active_input: null,
    text: ""
  };

  onChange = event => {
    this.setState({
      active_input: +event.target.getAttribute("data_name"),
      text: event.target.value
    });
  };
  onClick = event => {
    const text = this.state.text;
    this.setState({ text: "" });
  };

  render() {
    const { name1, name2, data_name1, active_input, text } = this.state;
    return (
      <div>
        <div className="inputText">
          <div className="outputText">
            <div>
              <div className="inp">
                <div className="inp1">
                  <InputText
                    onChange={this.onChange}
                    data_name={data_name1}
                    text={text}
                  />
                </div>
                <div className="wdt">
                  <Delete onClick={this.onClick} />
                </div>
              </div>
              <div className="addLang">
                {active_input === 1 && text !== "" && (
                  <Fragment>
                    <h5>Язык оригинала: </h5>
                    <Addlanguage name={"English"} />
                    <Addlanguage name={"Հայերեն"} />
                  </Fragment>
                )}
              </div>
              <div className="inpDown">
                <div className="microphone">
                  <img
                    src="https://ssl.gstatic.com/images/icons/material/system_gm/2x/mic_black_24dp.png"
                    width="30px"
                    alt="icon5"
                    className="microphone2"
                  />
                </div>
                <div className="count">
                  <span>{text.length}/5000 </span>
                </div>
                <div className="pen">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/edit.png"
                    width="20px"
                    alt="icon6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="translate">
            <Input
              type="textarea"
              placeholder="Перевод"
              style={{
                border: "1px solid gray",
                borderRight: "none",
                height: "9em",
                fontSize: "25px",
                borderRadius: "0",
                boxShadow: "none"
              }}
            />
          </div>
          <div className="translateMobile">
            {active_input === 1 && text !== "" && (
              <div className="minTr">
                <Input
                  type="textarea"
                  placeholder="Перевод"
                  style={{
                    border: "1px solid gray",
                    borderRight: "none",
                    height: "9em",
                    width: "100%",
                    fontSize: "25px",
                    borderRadius: "0",
                    boxShadow: "none",
                    backgroundColor: "#1a73e8",
                    color: "#fff"
                  }}
                />
                <div className="styleMinDown">
                  <div className="volume"></div>
                  <div>
                    <img
                      src="https://img.icons8.com/material/24/000000/copy.png"
                      alt="copy"
                    />
                  </div>
                  <div>
                    <img
                      src="https://ssl.gstatic.com/images/icons/material/system_gm/1x/more_vert_white_24dp.png"
                      alt="more"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <a href="https://translate.google.am/?hl=ru&tab=TT#view=home&op=translate&sl=auto&tl=ru">
          <em>Отправить отзыв</em>
        </a>
      </div>
    );
  }
}
export { TextArea };
