import React from "react";
import { Input } from "reactstrap";
import { Addlanguage } from "./Addlanguage";
import { Delete } from "./Delete";
import { InputText } from "./InputText";
//import styles from './Style.module.css';

class TextArea extends React.Component {
  state = {
    name: "English",
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
    const { name, data_name1, active_input, text } = this.state;
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              border: "1px solid gray",
              borderLeft: "none"
            }}
          >
            <div class="flex-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <div style={{ width: "95%", alignContent: "space-between" }}>
                  <InputText
                    onChange={this.onChange}
                    data_name={data_name1}
                    text={text}
                  />
                </div>
                <div style={{ width: "5%" }}>
                  <Delete onClick={this.onClick} />
                </div>
              </div>
              <div style={{ height: "20px" }}>
                {active_input === 1 && text !== "" && (
                  <Addlanguage name={name} />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  bottom: "35px",
                  width: "50%"
                }}
              >
                <div style={{ flexGrow: "8" }}>
                  <img
                    src="https://ssl.gstatic.com/images/icons/material/system_gm/2x/mic_black_24dp.png"
                    width="30px"
                    alt="icon5"
                  />
                </div>
                <div style={{ flexGrow: "1" }}>
                  <span>1/5000 </span>
                </div>
                <div style={{ flexGrow: "1" }}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/edit.png"
                    width="20px"
                    alt="icon6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f1f1f1",
              width: "50%",
              textAlign: "center",
              lineHeight: "75px",
              fontSize: "30px"
            }}
          >
            <Input
              type="textarea"
              placeholder="Перевод"
              style={{
                border: "1px solid gray",
                borderRight: "none",
                height: "9em",
                fontSize: "25px"
              }}
            />
          </div>
        </div>
        <a
          style={{ display: "flex", justifyContent: "flex-end", color: "gray" }}
          href="https://translate.google.am/?hl=ru&tab=TT#view=home&op=translate&sl=auto&tl=ru"
        >
          <em>Отправить отзыв</em>
        </a>
      </div>
    );
  }
}
export { TextArea };
