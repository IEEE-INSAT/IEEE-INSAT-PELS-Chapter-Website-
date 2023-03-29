import React, { useEffect } from "react";
import {Waypoint} from 'react-waypoint';
import "./plug.scss";

function PlugSeparator(props) {
    const handleWaypointEnter = () => {
        document.querySelector('.plug-animation').classList.add('plugged');
      };
    
      useEffect(() => {
        // Initialize Waypoint
       
      }, []);

  return (
    <div>
    <Waypoint onEnter={handleWaypointEnter} />
    <div className="plug-animation">
    <img className="plug" src={require("../../assets/images/separator/plug1.png")} alt="plug" />
   <h2>{props.title}</h2>
    <img className="socket" src={require("../../assets/images/separator/plug2.png")} alt="socket" />
 </div>
 </div>
  );
}

export default PlugSeparator;