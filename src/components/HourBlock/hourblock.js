import React from "react";
import '../../index.css';

function HourBlock(props) {
  return (
    
      <form onSubmit={() => props.handleFormSubmit(props)}>
       
        <div className="col-1 hour">{props.hour}</div>
        <input 
        className="col-10 description" 
        id={props.id} 
        value={props.task} 
        type="text"
       // onChange={}
        >
        </input>
        <button type="submit" onClick={() => props.handleFormSubmit(props)} className="col-1 btn btn-primary">Save</button>
        </form>
  
  
  );
}

export default HourBlock;