import React from 'react';


const UserProfileCard = (props) => {
    return (
        <div className="jr-card jr-card-full-height text-center overflow-hidden min-height-boxes primary-background">

            <div>
                <div className="jr-card-header-top mr-0 mb-2 ">
                    <span className="jr-menu-icon mr-auto">
                        <span className="menu-icon"/>
                    </span>
                    {/* <span className="icon-btn size-30"><i className="zmdi zmdi-more-vert zmdi-hc-lg"/></span> */}
                </div>

                <img className="rounded-circle size-80 mb-3"
                     src={props.userData.profileUrl} alt="Team Member"/>

                <div className="jr-card-hd-content">
                    <h4 className="mb-0">{props.userData.name}</h4>
                    <p className="sub-heading mb-0">{props.userData.roleTitle}</p>
                </div>
            </div>
            <div className="jr-card-body primary-background">
                <p>Starter Plan</p>
            </div>
        </div>
    )
};

export default UserProfileCard;
UserProfileCard.defaultProps = {
    headerStyle: ''
};

