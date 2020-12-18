import React from "react";
import "./Auxcomponent.css";

export default function auxcomponent(props) {
  return (
    <div className="Container">
      <div className="Container_smartphone">{props.children}</div>
    </div>
  );
}
