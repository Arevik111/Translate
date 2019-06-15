import React from "react";
import { Input } from "reactstrap";
class InputText extends React.Component {
  render() {
    const { data_name, onChange, text } = this.props;
    return (
      <Input
        type="textarea"
        style={{
          height: "4em",
          border: "none",
          fontSize: "25px",
          boxShadow: "none"
        }}
        data_name={data_name}
        placeholder="Введите текст"
        value={text}
        onChange={onChange}
      />
    );
  }
}

export { InputText };
