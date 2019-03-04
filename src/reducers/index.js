import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import Auth from './Auth';
import getUsers from './getUsers';


const reducers = combineReducers({
    routing: routerReducer,
    settings: Settings,
    users: getUsers,
    auth: Auth,
});

export default reducers;
