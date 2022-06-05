import React from "react"

export default function BracketMatching({sideL,sideR}){
  return (
    <div className="bracket-matching">
      <div className="side side-left ">{sideL}</div>
      <div className="center-matching">
        <div className="center-top"></div>
        <div className="center-top"></div>
      </div>
      <div className="side side-right ">{sideR}</div>
    </div>
  );
}
