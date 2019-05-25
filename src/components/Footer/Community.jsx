import React from "react";
import { Button } from "reactstrap";

class Community extends React.Component {
  render() {
    return (
      <div>
        <a href="https://translate.google.am/community?source=mfooter">
          <Button
            outline
            color="secondary"
            style={{ height: "4em", width: "4em", borderRadius: "50%" }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/group-foreground-selected.png"
              alt="icon9"
            />
          </Button>
          <h6>Сообщества</h6>
        </a>
      </div>
    );
  }
}

export { Community };
