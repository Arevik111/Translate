import React from "react";
import { Dropdown1 } from "./Dropdown1";
import { Dropdown2 } from "./Dropdown2";
import { Account } from "./Account";
import { Google } from "./Google";

class HeaderNew extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
          width: "100%",
          padding: "10px",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Dropdown1 />
          </div>
          <div>
            <Google />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ padding: "0 0" }}>
            <Dropdown2 />
          </div>
          <div style={{ padding: "0 0" }}>
            <Account />
          </div>
        </div>
      </div>
    );
  }
}

export { HeaderNew };
