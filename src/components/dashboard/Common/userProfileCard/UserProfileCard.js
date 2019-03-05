import React from 'react';
import Gravatar from 'react-gravatar';
import moment from 'moment';


const UserProfileCard = (props) => {
    const { userData } = props;
    return (
        <div className={`jr-card jr-card-full-height text-center overflow-hidden ${props.addStyle}`} >

            <div className=" padding-button-28">
                <div className="jr-card-header-top mr-0 mb-2 ">
                    <span className="jr-menu-icon mr-auto">
                        <span className="menu-icon" />
                    </span>
                    {/* <span className="icon-btn size-30"><i className="zmdi zmdi-more-vert zmdi-hc-lg"/></span> */}
                </div>

                <Gravatar email='default.com'
                    className="pointer user-avatar size-50" rating="pg" default='mm' />

                <div className="jr-card-hd-content">
                    <h3 className="mb-0">{userData.name}</h3>
                    <p className="sub-heading mb-0">{userData.emailAddress}</p>
                </div>
            </div>
            <div className="jr-card-body">
                <p>Activities completed: 3</p>
            </div>
            <div className="jr-card-body">
                <p>Active: {userData.isActive ? <i className="zmdi zmdi-circle green" /> : <i className="zmdi zmdi-circle orange" />}</p>
            </div>
            <div className="jr-card-body">
                <p>Created: {moment(userData.creationTime).format('LL')}</p>
            </div>
        </div >
    )
};

export default UserProfileCard;
UserProfileCard.defaultProps = {
    headerStyle: ''
};

