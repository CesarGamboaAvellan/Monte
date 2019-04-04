import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import Auth from './Auth';
import getUsers from './getUsers';
import getRoles from './getRoles';
import Permissions from './getPermissions';


const reducers = combineReducers({
    routing: routerReducer,
    settings: Settings,
    permissions: Permissions,
    users: getUsers,
    auth: Auth,
    roles: getRoles,
});

export default reducers;
