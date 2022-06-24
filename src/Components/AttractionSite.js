import React from "react";
import Giraff from "../images/gir.jpg";
import LocationIcon from "../images/location.png";

export default function AttractionSite(props){
    return(
        <div className="site-details">
            <img className="tour-img" src={props.imageUrl}></img>
            <div>
                <img src={LocationIcon} className="location-icon"></img>
                <span className="country">{props.location}</span>
                <a className="google-url" href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="title">{props.title}</h2>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
