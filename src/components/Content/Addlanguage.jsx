import React from "react";

class Addlanguage extends React.Component {
  render() {
    const { name } = this.props;
    return <input value={"Язык оригинала: " + name} />;
  }
}

export { Addlanguage };
