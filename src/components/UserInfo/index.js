import React from 'react';
import { connect } from 'react-redux'
import { userSignOut } from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Modal from '../../shared/Modal';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }
    render() {

        let image, name, email;
        if (!this.props.state.authUser) {
            console.log('loading');
        } else {
            console.log(this.props.state.authUser);
            if (this.props.state.authUser) {
                if (this.props.state.authUser.data) {
                    name = this.props.state.authUser.data.result.userName;
                    localStorage.setItem('userName', name);
                    image = this.props.state.authUser.data.result.userName;
                    email = this.props.state.authUser.data.result.emailAddress;
                }
                else {
                    if (this.props.state.authUser.data) {
                        name = this.props.state.authUser.result.userName;
                        localStorage.setItem('userName', name);
                        image = this.props.state.authUser.result.userName;
                        email = this.props.state.authUser.result.emailAddress;
                    }
                }
            }
        }
        return (
            <div>
                <div className="user-profile">
                    <div className="user-detail ml-2">
                        <h4 className="user-name mb-0">{name || ''}</h4>
                        <small>{email}</small>
                    </div>
                </div>
                <Link to="/app/profile" className="dropdown-item text-muted" >
                    <i className="zmdi zmdi-face zmdi-hc-fw mr-1" />
                    <IntlMessages id="popup.profile" />
                </Link>
                <Button
                    onClick={() => this.props.showPasswordModal('password')}
                    className="dropdown-item text-muted" >
                    <i className="zmdi zmdi-key zmdi-hc-fw mr-1" />
                    <IntlMessages id="popup.changePassword" />
                </Button>
                <Button
                    onClick={() => this.props.showPasswordModal('settings')}
                    className="dropdown-item text-muted" href="javascript:void(0)">
                    <i className="zmdi zmdi-settings zmdi-hc-fw mr-1" />
                    <IntlMessages id="popup.setting" />
                </Button>
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


