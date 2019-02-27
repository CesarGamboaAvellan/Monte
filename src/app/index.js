import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import * as routes from './routes/routes';
import {
    ABOVE_THE_HEADER,
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION
} from 'constants/ActionTypes';
import { isIOS, isMobile } from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';


class App extends React.Component {
    routeStructure = (routes, match) => {
        return (
            <Route path={`${match.url}${routes.route}`}
                component={routes.component} />
        )
    }

    render() {
        const { match, drawerType, navigationStyle, horizontalNavPosition } = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';
        const userRoutes = [
            { route: routes.activityRoute, component: asyncComponent(() => import('./routes/Activity/activity')) },
            { route: routes.samplePage, component: asyncComponent(() => import('./routes/Dashboard')) },
            { route: routes.domainsRoute, component: asyncComponent(() => import('./routes/Domains/domains')) },
            { route: routes.timelineRoute, component: asyncComponent(() => import('./routes/Timelines/timeline')) },
            { route: routes.profileRoute, component: asyncComponent(() => import('./routes/UserProfile/userProfile')) },
        ]
        const adminRoutes = [
            ...userRoutes,
            { route: routes.adminZone, component: asyncComponent(() => import('./routes/Admin')) }
        ]
        // getusertype
        const userType = 'admin';
        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        } else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }
        return (
            <div className={`app-container ${drawerStyle}`}>
                <Sidebar />
                <div className="app-main-container">
                    <div className="app-header">
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
                            <TopNav styleName="app-top-header" />}
                        <Header />
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
                            <TopNav />}

                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                {userType !== 'admin' ? userRoutes
                                    .map(routes => this
                                        .routeStructure(routes, match)) : adminRoutes
                                            .map(routes => this
                                                .routeStructure(routes, match))}
                                <Route
                                    component={asyncComponent(() => import('components/Error404'))} />
                            </Switch>
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ settings }) => {
    const { drawerType, navigationStyle, horizontalNavPosition } = settings;
    return { drawerType, navigationStyle, horizontalNavPosition }
};
export default withRouter(connect(mapStateToProps)(App));
