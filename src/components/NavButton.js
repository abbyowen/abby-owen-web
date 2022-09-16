import React from "react";
import '../styles/navButtonStyles.css';
import { Link } from "react-router-dom";

export function NavButton(props) {
    return (  
        <Link style={{textDecoration: 'none'}} to={props.navTo}>
            <div className="button" style={props.style}>
                {props.text}
            </div> 
        </Link>   
    );

}


