import React from "react"
import WorldIcon from "../images/world.png";
export default function Main (){
    return(
        <div className="top-header">
        <img  className = "rotate"src={WorldIcon}></img>
            <h3>my travel journal</h3>
        </div>
        
    )
}