import React from "react";
import '../styles/expirienceStyles.css';
import '../styles/headerInfoStyles.css';
import { Icon } from '@iconify/react'

export function Description(props) {
    return (
        <div className="des-header-container">
            <Icon style={{color: props.color}} icon={props.icon} height={props.icon_height} width={props.icon_width} />
            <div className="des-header-row" style={props.style}>
                {props.text}
            </div>
        </div>

        
    );
}