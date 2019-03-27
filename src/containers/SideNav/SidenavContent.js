import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from "util/CustomScrollbars";

class SidenavContent extends Component {

    componentDidMount() {
        const { history } = this.props;
        const that = this;
        const pathname = `#${history.location.pathname}`;// get current path

        const subMenuLi = document.querySelectorAll('.sub-menu > li');
        for (let i = 0; i < subMenuLi.length; i++) {
            subMenuLi[i].onclick = function (event) {
                event.stopPropagation();
            }
        }

        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                for (let j = 0; j < menuLi.length; j++) {
                    const parentLi = that.closest(this, 'li');
                    if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
                        menuLi[j].classList.remove('open')
                    }
                }
                this.classList.toggle('open');
                event.stopPropagation();
            }
        }

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }

    }

    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (e) {

        }

        return null;
    }
    render() {

        return (
            <CustomScrollbars className="scrollbar dashboard-primary" style={{ height: 'calc(100vh - 70px)' }}>
                <ul className="nav-menu">

                    <li className="menu no-arrow">
                        <NavLink to="/app/sample-page" className="nav-link">
                            <i className="flaticon-home-1 nav-text" />
                            <span className="nav-text"><IntlMessages id="pages.samplePage" /> </span>
                        </NavLink>
                        <NavLink to="/app/getDomain" className="nav-link">
                            <i className="flaticon-globe nav-text" />
                            <span className="nav-text">Get a Domain</span>
                        </NavLink>
                        {/* <NavLink to="/app/domains" className="nav-link">
                            <i className="flaticon-globe nav-text" />
                            <span className="nav-text"><IntlMessages id="nav.Domains" /> </span>
                        </NavLink> */}
                        <NavLink to="/app/timeline" className="nav-link">
                            <i className="flaticon-list-1 nav-text" />
                            <span className="nav-text"><IntlMessages id="nav.TimeLine" /> </span>
                        </NavLink>
                        <li className="menu" >
                            <a role="button" href="javascript:void(0)">
                                <i className="flaticon-avatar nav-text" />
                                <span className="nav-text">
                                    <IntlMessages id="nav.Admin" />
                                </span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <NavLink className="prepend-icon nav-link" to="/app/users">
                                        <i className="flaticon-users zmdi-hc-fw" />
                                        <span className="nav-text"><IntlMessages id="nav.users" /> </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="prepend-icon nav-link" to="/app/roles">
                                        <i className="flaticon-map" />
                                        <span className="nav-text"><IntlMessages id="nav.roles" /></span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="prepend-icon nav-link" to="/app/settings">
                                        <i className="flaticon-cogwheel" />
                                        <span className="nav-text"><IntlMessages
                                            id="nav.settings" /></span>
                                    </NavLink>
                                </li>
                            </ul>

                        </li>
                        {/* // userType === 'admin' && <NavLink to="/app/admin">
                            //     <i className="zmdi zmdi-account zmdi-hc-fw orange-color" />
                            //     <span className="nav-text secondary-color"><IntlMessages id="nav.Admin" /> </span>
                            // </NavLink>{ */}


                    </li>

                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
