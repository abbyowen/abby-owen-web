import React from "react";
import '../styles/headerInfoStyles.css';
import { PersonalInfo } from "./PersonalInfo";
import { NavButton } from "./NavButton";
import { HomeHeader } from "./HomeHeader";

export function HeaderInfo(props) {
    return (
    
            <div className="header-container">
                <div className="intro-header">
                    Hi, I'm
                </div>
                <HomeHeader text="Abigail Owen" size={{fontSize: "100px"}}/>
                <PersonalInfo icon="cil:education" text="Dartmouth College" style={{color: "#065000"}} icon_height="50" icon_width="50"/>
                <PersonalInfo icon="bi:pin-map" text="Larchmont, NY" style={{color: "#0f44cd"}} icon_height="50" icon_width="50"/>
                <PersonalInfo icon="ant-design:code-outlined" text="Software Engineer" style={{color: "#CD0F32"}} icon_height="50" icon_width="50"/>
                <PersonalInfo icon="bx:book-heart" text="New York Times Crossword Puzzles, Tennis, Creative Writing" style={{color: "#C90FCD"}} icon_height="50" icon_width="50"/>
                <div className="nav-container">
                    <NavButton navTo="/expiriences" text="Expiriences" style={{background: "linear-gradient(90deg, rgba(15, 171, 205, 1) 0%, rgba(27, 199, 12, 1))"}}/>
                    <NavButton navTo='/' text="Projects" style={{background: "linear-gradient(90deg, rgba(236,16,55,1) 0%, rgba(250,0,255,1))"}}/>
                </div>
            </div>


        
    );
}