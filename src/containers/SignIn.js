import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import AddContact from '../components/todo/AddNew';
import IntlMessages from 'util/IntlMessages';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignIn,
    userTwitterSignIn
} from 'actions/Auth';
import CircularProgress from 'components/CircularProgress'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            showPasswordModal: false
        }
    }

    componentDidUpdate() {
        if (this.props.showMessage) {
            setTimeout(() => {
                this.props.hideMessage();
            }, 100);
        }
        if (this.props.authUser !== null) {
            this.props.history.push('/app/sample-page');
        }
    }
    showPasswordModal = () => {
        this.setState({
            showPasswordModal: !this.state.showPasswordModal
        })
    }
    resetPassword = () => {

    }

    render() {
        const {
            email,
            password
        } = this.state;
        const { showMessage, loader, alertMessage } = this.props;
        return (
            <React.Fragment>
                {this.state.showPasswordModal && <AddContact
                    action="Send Recovery Email"
                    onclick={this.resetPassword}
                    valueToSend="cesar@firstfactory.com"
                />
                }
                <div
                    className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                    <div className="app-login-main-content">
                        <div className="app-logo-content d-flex align-items-center justify-content-center">
                            <Link className="logo-lg" to="/" title="Jambo">
                                <img src="//launchrocket.co/wp-content/uploads/launchrocket-logo.png" className="login-icon" alt="jambo" title="jambo" />
                            </Link>
                        </div>

                        <div className="app-login-content">
                            <div className="app-login-header mb-4">
                                <h1>Login</h1>
                            </div>

                            <div className="app-login-form">
                                <form>
                                    <div className="form-group mb-3">
                                        <input
                                            placeholder="Email or Username"
                                            onChange={(event) => this.setState({ email: event.target.value })}
                                            defaultValue={this.state.email}
                                            className="form-control form-control-lg"
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            onChange={(event) => this.setState({ password: event.target.value })}
                                            defaultValue={password}
                                            className="form-control form-control-lg"
                                        />
                                    </div>

                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                        <Button onClick={() => {
                                            this.props.showAuthLoader();
                                            this.props.userSignIn({ email, password });
                                        }} className="text-uppercase button-link">
                                            <IntlMessages id="appModule.signIn" />
                                        </Button>

                                        <div className="secondary-login-buttons">
                                            <Link to="/signup" className="center-text">
                                                <IntlMessages id="signIn.signUp" className="button-link-secondary" />
                                            </Link>
                                            <Button onClick={this.showPasswordModal} className="forgot-password">
                                                <IntlMessages id="sidebar.appModule.forgotPassword"
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    {
                        loader &&
                        <div className="loader-view">
                            <CircularProgress />
                        </div>
                    }
                    {showMessage && NotificationManager.error(alertMessage)}
                    <NotificationContainer />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { loader, alertMessage, showMessage, authUser } = auth;
    return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
})(SignIn);
