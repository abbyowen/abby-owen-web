import '../styles/timelineStyles.css';

export function Timeline(props) {
    return (
            <div className="timeline-container">
                <div className="start-container">
                    <div className="time-circle" style={{borderColor: props.color}}/>
                    <div className="text-container">
                        {props.start}
                    </div>
                </div>
                <hr style={{
                        color: props.color,
                        background: props.color,
                        borderColor: props.color,
                        height: '1px'
                }}/>
                <div className="end-container">
                    <div className="time-circle" style={{borderColor: props.color}}/>
                    <div className="text-container">
                        {props.end}
                    </div>
                </div>


            </div>       
    );
}