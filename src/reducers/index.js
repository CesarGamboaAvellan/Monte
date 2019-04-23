import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import Auth from './Auth';
import getUsers from './getUsers';
import getRoles from './getRoles';
import Permissions from './getPermissions';
import DomainLookup from './domainLookUp';


const reducers = combineReducers({
    routing: routerReducer,
    settings: Settings,
    permissions: Permissions,
    users: getUsers,
    auth: Auth,
    roles: getRoles,
    domainLookUp: DomainLookup,
});

export default reducers;
