import React from "react";


function HourBlock(props) {
  return (
    <div className="row">
        <div className="col-1 hour">{props.hour}</div>
        <div className="col-10 description">
            {props.task}
        </div>
        <button onClick={() => props.handleSaveTask(props.id)} className="saveTask">
        Save
      </button>
    </div>
  );
}

export default HourBlock;