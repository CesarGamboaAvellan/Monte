import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import configureStore, { history } from './store';
import './firebase/firebase';
import App from './containers/App';

const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch(e){
        console.log(e)
    }
}

export const store = configureStore ();
store.subscribe(() => saveToLocalStorage(store.getState()))

const MainApp = () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>;


export default MainApp;