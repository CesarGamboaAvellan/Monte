import React from 'react';
import {connect} from 'react-redux'
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';
import userIcon from '../../assets/images/pentagon_1.png'

class UserInfo extends React.Component {
    render() {
        let image, name;
        if(!this.props.state.authUser){
            console.log('loading');
        }else{
            console.log('state in users', this.props.state.authUser);
            if(this.props.state.authUser.additionalUserInfo){
                name = this.props.state.authUser.additionalUserInfo.profile.name;
                localStorage.setItem('userName', name);
                image = this.props.state.authUser.additionalUserInfo.profile.picture;
                localStorage.setItem('imageProfile', image);
            }
        }
        return (
            <div>
                <div className="user-profile">
                    <img className="user-avatar border-0 size-40" src={userIcon}
                         alt="User"/>
                        <div className="user-detail ml-2">
                            <h4 className="user-name mb-0">{name || localStorage
                                .getItem('userName')}</h4>
                            <small>Developer</small>
                        </div>
                </div>
                    <a className="dropdown-item text-muted" href="javascript:void(0)">
                        <i className="zmdi zmdi-face zmdi-hc-fw mr-1"/>
                        <IntlMessages id="popup.profile"/>
                    </a>
                    <a className="dropdown-item text-muted" href="javascript:void(0)">
                        <i className="zmdi zmdi-settings zmdi-hc-fw mr-1"/>
                        <IntlMessages id="popup.setting"/>
                    </a>
                    <a className="dropdown-item text-muted" href="javascript:void(0)" onClick={() => {
                        console.log("Try to logoput");
                        this.props.userSignOut()
                    }}>
                        <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1"/>
                        <IntlMessages id="popup.logout"/>
                    </a>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
      state: state.auth, // takes the store selected as renders it as a prop
    }
  }
export default connect(mapStateToProps, {userSignOut})(UserInfo);


