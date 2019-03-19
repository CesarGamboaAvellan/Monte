import React from 'react';
import {MINI_DRAWER} from "constants/ActionTypes";

const SidenavLogo = ({drawerType}) => {

    const showMini = drawerType.includes(MINI_DRAWER);

    return (
        <div className="sidebar-header d-flex align-items-center">
            {showMini ?
                <div className="mini-logo">
                    <img className="mini-logo-img" 
                    alt='...' 
                    src='//launchrocket.co/wp-content/uploads/launchrocket-logo.png'/>
                    <img 
                    className="mini-logo-img-hover" 
                    alt='...' 
                    src='//launchrocket.co/wp-content/uploads/launchrocket-logo.png'/>
                </div> : <img alt='...' 
                src='//launchrocket.co/wp-content/uploads/launchrocket-logo.png' 
                className= "login-icon"/>
            }
        </div>
    );
};

export default SidenavLogo;
