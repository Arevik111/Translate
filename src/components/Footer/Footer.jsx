import React from "react";
import { History } from "./History";
import { Saved } from "./Saved";
import { Community } from "./Community";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "30px",
          paddingTop: "30px"
        }}
      >
        <div
          style={{
            margin: "30px"
          }}
        >
          <History />
        </div>
        <div
          style={{
            margin: "30px"
          }}
        >
          <Saved />
        </div>
        <div
          style={{
            margin: "30px"
          }}
        >
          <Community />
        </div>
      </div>
    );
  }
}

export { Footer };
