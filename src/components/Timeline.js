import '../styles/timelineStyles.css';
import { Icon } from '@iconify/react';

export function Timeline(props) {
    return (
        <div className="timeline-container">
            <Icon style={{color: props.color}} icon="carbon:time" height="30" width="30" />
            <div className="time-row" style={{color: props.color}}>
                {props.start}
                <Icon style={{color: props.color, MarginLeft: "5px", MarginRight: "5px"}} icon="akar-icons:arrow-right-thick" height="15" width="15" />
                {props.end}
            </div>
        </div>       
    );
}