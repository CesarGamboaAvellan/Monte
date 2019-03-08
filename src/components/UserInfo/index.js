import React from 'react';
import { connect } from 'react-redux'
import { userSignOut } from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';
import { Link } from 'react-router-dom'
// import Gravatar from 'react-gravatar'

class UserInfo extends React.Component {
    render() {
        let image, name, email;
        if (!this.props.state.authUser) {
            console.log('loading');
        } else {
            console.log(this.props.state.authUser)
            if (this.props.state.authUser.data.result) {
                name = this.props.state.authUser.data.result.userName;
                localStorage.setItem('userName', name);
                image = this.props.state.authUser.data.result.userName;
                email = this.props.state.authUser.data.result.emailAddress;
            }
        }
        return (
            <div>
                <div className="user-profile">
                    {/* <Gravatar email="mathews.kyle@gmail.com" /> */}
                    <div className="user-detail ml-2">
                        <h4 className="user-name mb-0">{name || ''}</h4>
                        <small>{email}</small>
                    </div>
                </div>
                <Link to="/app/profile" className="dropdown-item text-muted" >
                    <i className="zmdi zmdi-face zmdi-hc-fw mr-1" />
                    <IntlMessages id="popup.profile" />
                </Link>
                <Link to="/app/profile" className="dropdown-item text-muted" >
                    <i className="zmdi zmdi-key zmdi-hc-fw mr-1" />
                    <IntlMessages id="popup.changePassword" />
                </Link>
                <a className="dropdown-item text-muted" href="javascript:void(0)">
                    <i className="zmdi zmdi-settings zmdi-hc-fw mr-1" />
                    <IntlMessages id="popup.setting" />
                </a>
                <a className="dropdown-item text-muted" href="javascript:void(0)" onClick={() => {
                    this.props.userSignOut()
                }}>
                    <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1" />
                    <IntlMessages id="popup.logout" />
                </a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.auth, // takes the store selected as renders it as a prop
    }
}
export default connect(mapStateToProps, { userSignOut })(UserInfo);


