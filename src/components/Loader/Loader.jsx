import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="Loader--Container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
