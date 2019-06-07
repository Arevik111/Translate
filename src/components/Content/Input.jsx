import React from "react";
import { Input } from "reactstrap";
class InputText extends React.Component {
  render() {
    const { name, data_name, onChange, value } = this.props;
    return (
      <Input
        type="textarea"
        style={{
          height: "6em",
          borderBottom: "none",
          borderRight: "none",
          fontSize: "25px"
        }}
        value={value}
        placeholder="Введите текст"
        data_name={data_name1}
        onChange={onChange}
      />
    );
  }
}

export { InputText };
