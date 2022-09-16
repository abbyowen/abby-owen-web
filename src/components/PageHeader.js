import '../styles/headerInfoStyles.css';
import { HomeHeader } from './HomeHeader';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export function PageHeader(props) {
    return (     
        <div className="title-container">
                <Link style={{textDecoration: 'none'}} to="/">
                    <HomeHeader text="Abigail Owen" size={{fontSize: "80px"}}/>
                </Link>
                <div className="icon-container">
                    <div className="icon-box">
                        <Icon icon="cil:education" height="50" width="50" />
                    </div>
                    <div className="icon-box">
                        <Icon icon="bi:pin-map" height="50" width="50" />
                    </div>
                    <div className="icon-box">
                        <Icon icon="ant-design:code-outlined" height="50" width="50" />
                    </div>
                    <div className="icon-box">
                        <Icon icon="bx:book-heart" height="50" width="50" />
                    </div>
                </div>
        </div>  
    );
}