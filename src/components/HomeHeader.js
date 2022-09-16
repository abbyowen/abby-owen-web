import '../styles/headerInfoStyles.css';

export function HomeHeader(props) {
    return (     
        <div className="header" style={props.size}>
            {props.text}
        </div>      
    );
}