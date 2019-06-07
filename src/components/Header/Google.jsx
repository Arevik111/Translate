import React from "react";

class Google extends React.Component {
  render() {
    return (
      <div>
        <a href="http://localhost:3000/">
          <img
            src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
			alt="google"
            style={{
              width: "90px",
              display: "inline-block",
              lineHeight: "normal"
            }}
          />
          <span
            style={{
              display: "inline-block",
              fontSize: "26px",
              color: "#5f6368",
              position: "relative"
            }}
          >
            Переводчик
          </span>
        </a>
      </div>
    );
  }
}

export { Google };
