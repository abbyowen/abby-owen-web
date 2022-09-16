import React from "react";
import '../styles/personalInfo.css';
import { Icon } from '@iconify/react'

export function PersonalInfo(props) {
    return (
        <div className="header-information-container">
            <Icon style={{color: props.color}} icon={props.icon} height={props.icon_height} width={props.icon_width} />
            <div className="information-row" style={props.style}>
                {props.text}
            </div>
        </div>

        
    );
}