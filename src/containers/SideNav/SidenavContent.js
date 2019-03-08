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
        const userType = (localStorage.getItem('user') === ('admin@defaulttenant.com')) ? 'admin' : 'regular';

        return (
            <CustomScrollbars className="scrollbar dashboard-primary" style={{ height: 'calc(100vh - 70px)' }}>
                <ul className="nav-menu">
                    <li className="menu no-arrow">
                        <NavLink to="/app/sample-page">
                            <i className="zmdi zmdi-home zmdi-hc-fw orange-color" />
                            <span className="nav-text secondary-color"><IntlMessages id="pages.samplePage" /> </span>
                        </NavLink>
                        <NavLink to="/app/domains">
                            <i className="zmdi zmdi-rss zmdi-hc-fw orange-color" />
                            <span className="nav-text secondary-color"><IntlMessages id="nav.Domains" /> </span>
                        </NavLink>
                        <NavLink to="/app/timeline">
                            <i className="zmdi zmdi-time zmdi-hc-fw orange-color" />
                            <span className="nav-text secondary-color"><IntlMessages id="nav.TimeLine" /> </span>
                        </NavLink>
                        {
                            userType === 'admin' && <NavLink to="/app/admin">
                                <i className="zmdi zmdi-account zmdi-hc-fw orange-color" />
                                <span className="nav-text secondary-color"><IntlMessages id="nav.Admin" /> </span>
                            </NavLink>
                        }{
                            userType === 'admin' && <NavLink to="/app/users">
                                <i className="zmdi zmdi-account zmdi-hc-fw orange-color" />
                                <span className="nav-text secondary-color"><IntlMessages id="nav.Users" /> </span>
                            </NavLink>
                        }

                    </li>

                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
