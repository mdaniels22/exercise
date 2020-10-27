import React from "react";
import "./Auxcomponent.css";

export default function auxcomponent(props) {
  return <div className="Container">{props.children}</div>;
}
