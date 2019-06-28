import React from "react";
import "../Footer/Footer.css";

class HistoryContent extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <div className="modalheader">
          <div className="history">История</div>
          <div>
            <button className="btnX" onClick={onClick}>
              x
            </button>
          </div>
        </div>
        <hr />
        <div className="modalbody">
          <img
            src="https://ssl.gstatic.com/translate/history-illustration-1x.png"
            alt="icon10"
          />
        </div>
      </div>
    );
  }
}

export { HistoryContent };
