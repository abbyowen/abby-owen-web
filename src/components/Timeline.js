import '../styles/timelineStyles.css';
import { Icon } from '@iconify/react';

export function Timeline(props) {
    return (
        <div className="timeline-container">
            <div className="time-row" style={{color: props.color}}>
                <div className='clock-container'>
                    <Icon style={{color: props.color}} icon="clarity:clock-solid" height="30" width="30" />
                </div>
                {props.start}
                <div className='arrow-container'>
                    <Icon style={{color: props.color}} icon="bxs:right-arrow-circle" height="20" width="20" />
                </div>
                {props.end}
            </div>
        </div>       
    );
}