import React from "react";
import { Button } from "reactstrap";

class Delete extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <Button
        color="link"
        onClick={onClick}
        style={{ textDecoration: "none", color: "gray", fontSize: "22px" }}
      >
        x
      </Button>
    );
  }
}

export { Delete };
