import React from "react";

class Addlanguage extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <ol style={{ margin: "0px" }}>
        <li>{name}</li>
      </ol>
    );
  }
}

export { Addlanguage };
