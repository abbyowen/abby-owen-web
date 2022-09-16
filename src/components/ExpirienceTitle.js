import React from "react";
import '../styles/expirienceStyles.css';
import { Icon } from '@iconify/react'

export function ExpirienceTitle(props) {
    return (
        <div className="ex-header-container">
            <Icon style={{color: props.color}} icon={props.icon} height={props.icon_height} width={props.icon_width} />
            <div className="ex-header-row" style={props.style}>
                {props.text}
            </div>
        </div>

        
    );
}