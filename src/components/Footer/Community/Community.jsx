import React from "react";
import { Button } from "reactstrap";

class Community extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <a href="https://translate.google.am/community?source=mfooter">
          <Button
            outline
            color="secondary"
            style={{
              height: "6em",
              width: "6em",
              borderRadius: "50%",
              margin: "10px",
              backgroundColor: "white"
            }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/group-foreground-selected.png"
              alt="icon9"
            />
          </Button>
        </a>
        <h6>Сообщества</h6>
      </div>
    );
  }
}

export { Community };
