import React from "react";
import { HistoryContent } from "../HistoryContent/HistoryContent";
import "./Modal.css";

class ModalHistory extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="modall">
        <HistoryContent onClick={onClick} />
      </div>
    );
  }
}

export { ModalHistory };
