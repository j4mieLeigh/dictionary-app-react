import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetics.audio}
        target="_blank"
        title="Play audio"
      >
        ▶
      </a>
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
