import React from "react";
import { SavedContent } from "../SavedContent/SavedContent";
import "./Modal.scss";

class ModalSaved extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="modall">
        <SavedContent onClick={onClick} />
      </div>
    );
  }
}

export { ModalSaved };