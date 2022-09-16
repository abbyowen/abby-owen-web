import '../styles/home.css';
import React from 'react';
import { HeaderInfo } from '../components/HeaderInfo';

// import { Expirience } from './components/Expirience';

export function Home(props) {
    return (
        <div className="home-wrapper">
            <HeaderInfo></HeaderInfo>
        </div>
    );
}