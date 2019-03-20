import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { COLLAPSED_DRAWER, FIXED_DRAWER, HORIZONTAL_NAVIGATION, INSIDE_THE_HEADER } from 'constants/ActionTypes';
import SearchBox from 'components/SearchBox';
import MailNotification from '../MailNotification/index';
import AppNotification from '../AppNotification/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import { switchLanguage, toggleCollapsedNav } from 'actions/Setting';
import IntlMessages from 'util/IntlMessages';
import LanguageSwitcher from 'components/LanguageSwitcher/index';
import UserInfo from 'components/UserInfo';
import Menu from "components/Header/Menu";
import Gravatar from 'react-gravatar';
import logoIcon from '../../assets/images/pentagon.png';
// import Modal from '../../shared/Modal';
import PasswordModal from '../../containers/Modals/PasswordModalForm';
import MySettingsModal from '../../containers/Modals/settingsModal';


class Header extends React.Component {


    onAppNotificationSelect = () => {
        this.setState({
            appNotification: !this.state.appNotification
        })
    };
    onMailNotificationSelect = () => {
        this.setState({
            mailNotification: !this.state.mailNotification
        })
    };

    onUserInfoSelect = () => {
        this.setState({
            userInfo: !this.state.userInfo
        })
    };
    showPasswordModal = (type) => {
        console.log('type of call', type);
        if (type === 'password') {
            this.setState({
                showPasswordModal: !this.state.showPasswordModal,
            })
        }
        else if (type === 'settings') {
            this.setState({
                showSettingsModal: !this.state.showSettingsModal,
            })
        }
        else {
            this.setState({
                showSettingsModal: false,
                showPasswordModal: false,
            })
        }
    }

    onLangSwitcherSelect = (event) => {
        this.setState({
            langSwitcher: !this.state.langSwitcher
        })
    };
    onSearchBoxSelect = () => {
        this.setState({
            searchBox: !this.state.searchBox
        })
    };
    handleRequestClose = () => {
        this.setState({ langSwitcher: false, mailNotification: false, appNotification: false, searchBox: false });
    };
    onToggleCollapsedNav = (e) => {
        let val = !this.props.navCollapsed

        this.props.toggleCollapsedNav(val);
    };
    constructor() {
        super();
        this.state = {
            searchBox: false,
            showPasswordModal: false,
            showSettingsModal: false,
            searchText: '',
            mailNotification: false,
            langSwitcher: false,
            appNotification: false,
            userInfo: false

        }
    }

    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value,
        });
    }

    render() {
        const { drawerType, locale, navigationStyle, horizontalNavPosition, navCollapsed } = this.props;
        console.log(this.props, 'header');
        const drawerStyle = drawerType.includes(COLLAPSED_DRAWER) ? 'd-flex' : 'd-flex';

        return (
            <div className="app-main-header">

                {
                    this.state.showPasswordModal && <PasswordModal
                        title="Reset your Password"
                        action="Reset"
                        showPasswordModal={() => this.showPasswordModal('password')}
                        value1="Your current password"
                        value2="Your new password"
                    />
                }
                {
                    this.state.showSettingsModal && <MySettingsModal
                        userData={this.props.auth}
                        title="My Settings"
                        action="Change"
                        showPasswordModal={() => this.showPasswordModal('settings')}
                        value1="UserName"
                        value2="Email"
                    />
                }
                <div className="d-flex app-toolbar align-items-center">
                    {navigationStyle === HORIZONTAL_NAVIGATION ?
                        <div className="app-logo-bl">
                            <div className="d-block d-md-none">
                                <span className="jr-menu-icon"
                                    onClick={this.onToggleCollapsedNav}>
                                    <span className="menu-icon" />
                                </span>
                            </div>
                            <div className="app-logo pointer d-none d-md-block">
                                <img className="d-none d-lg-block" alt='...' src='http://via.placeholder.com/105x36' />
                                <img className="d-block d-lg-none mr-3" alt='...'
                                    src='http://via.placeholder.com/32x32' />
                            </div>
                        </div>
                        :
                        <span className={`jr-menu-icon pointer ${drawerStyle}`}
                            onClick={this.onToggleCollapsedNav}>
                            <span className="menu-icon" />
                        </span>
                    }

                    {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === INSIDE_THE_HEADER) &&
                        <Menu />}

                    <ul className="header-notifications list-inline ml-auto">

                        <li>
                            <img className='login-icon header-centered-icon' alt='...' src='//launchrocket.co/wp-content/uploads/launchrocket-logo.png' />
                        </li>
                        <li className="d-inline-block d-lg-none list-inline-item">
                            <Dropdown
                                className="quick-menu nav-searchbox"
                                isOpen={this.state.searchBox}
                                toggle={this.onSearchBoxSelect.bind(this)}>

                                {/* <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <span className="icon-btn size-30 purple-color">
                                        <i className="zmdi zmdi-search zmdi-hc-fw purple-color" />
                                    </span>
                                </DropdownToggle> */}

                                <DropdownMenu right className="p-0">
                                    <SearchBox styleName="search-dropdown" placeholder=""
                                        onChange={this.updateSearchText.bind(this)}
                                        value={this.state.searchText} />
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.langSwitcher}
                                toggle={this.onLangSwitcherSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <div className="d-flex align-items-center pointer">
                                        <i className={`flag flag-24 flag-${locale.icon} purple-color`} />
                                    </div>
                                </DropdownToggle>

                                <DropdownMenu right className="w-50">
                                    <LanguageSwitcher switchLanguage={this.props.switchLanguage}
                                        handleRequestClose={this.handleRequestClose} />
                                </DropdownMenu>
                            </Dropdown>


                        </li>
                        <li className="list-inline-item app-tour">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.appNotification}
                                toggle={this.onAppNotificationSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <span className="icon-btn size-20 font-size-16">
                                        <i className="zmdi zmdi-notifications-active zmdi-hc-lg icon-alert purple-color" />
                                    </span>
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center"
                                        heading={<IntlMessages id="appNotification.title" />} />
                                    <AppNotification />
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item mail-tour">
                            <Dropdown
                                className="quick-menu purple-color"
                                isOpen={this.state.mailNotification}
                                toggle={this.onMailNotificationSelect.bind(this)}
                            >
                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">

                                    <span className="icon-btn size-20 font-size-16">
                                        <i className="zmdi zmdi-comment-alt-text icon-alert zmdi-hc-lg purple-color" />
                                    </span>
                                </DropdownToggle>


                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center"
                                        heading={<IntlMessages id="mailNotification.title" />} />
                                    <MailNotification />
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item user-nav">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.userInfo}
                                toggle={this.onUserInfoSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <Gravatar email={localStorage.getItem('user') || 'default.com'}
                                        className="pointer user-avatar size-30" rating="pg" default='mm' />
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <UserInfo
                                        showPasswordModal={(data) => this.showPasswordModal(data)}
                                    />
                                </DropdownMenu>
                            </Dropdown>

                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({ settings, auth }) => {
    const { drawerType, locale, navigationStyle, horizontalNavPosition, navCollapsed } = settings;
    return { drawerType, locale, navigationStyle, horizontalNavPosition, auth, navCollapsed }
};

export default withRouter(connect(mapStateToProps, { toggleCollapsedNav, switchLanguage })(Header));
