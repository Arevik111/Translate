import React from "react";
import "./Google.css";

class Google extends React.Component {
  render() {
    return (
      <div>
        <a href="http://localhost:3000/">
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
            alt="google"
            className="google"
          />
          <span>Переводчик</span>
        </a>
      </div>
    );
  }
}

export { Google };
