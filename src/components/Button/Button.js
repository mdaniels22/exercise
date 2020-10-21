import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div>
      <button className={props.className} onClick={props.clicked}>
        {props.buttonName}
      </button>
    </div>
  );
}
