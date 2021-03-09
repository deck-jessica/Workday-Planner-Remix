import React from "react";


function HourBlock(props) {
  return (
    <div className="row">
        <div className="col-1 hour">{props.hour}</div>
        <input className="col-10 description" id={props.id} type="text">
        </input>
        <button onClick={() => props.handleSaveTask(props)} className="col-1 btn">Save</button>
    </div>
  );
}

export default HourBlock;