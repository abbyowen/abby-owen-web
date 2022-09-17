import '../styles/expirienceStyles.css';
import '../styles/headerInfoStyles.css';
import { ExpirienceTitle } from './ExpirienceTitle';
import { Description } from './Description';
import { Timeline } from './Timeline';

export function Expirience(props) {
    let itemList=[];
    for (var i = 0; i < props.bullets.length; i++) {
        itemList.push( <li key={i}>{props.bullets[i]}</li>);

    };
    let skillsList=[];
    for (var j = 0; j < props.skills.length; j++) {
        skillsList.push( <li key={j}>{props.skills[j]}</li>);

    };
    return (
        <div className="body-container">
            <div className="expirience-container">
                <ExpirienceTitle 
                    color={props.color} 
                    icon="ic:outline-work-outline" 
                    text={props.header} 
                    style={{color: props.color, fontSize: props.size}} 
                    icon_height="40" 
                    icon_width="40"
                />
                
                
                <Timeline color={props.color} start={props.start} end={props.end}></Timeline>
                <Description
                    color={props.color} 
                    icon="fluent:text-description-20-filled"
                    text="Description" 
                    style={{color: props.color}} 
                    icon_height="50" 
                    icon_width="50"
                />
                <ul className="des-content" style={{fontSize: props.list_size}}>
                    {itemList}
                </ul>
                <Description
                    color={props.color} 
                    icon="ant-design:code-outlined"
                    text="Skills and Languages" 
                    style={{color: props.color}} 
                    icon_height="50" 
                    icon_width="50"
                />
                <ul className="des-content" style={{fontSize: props.list_size}}>
                    {skillsList}
                </ul>
            </div>
        </div>
    );
}