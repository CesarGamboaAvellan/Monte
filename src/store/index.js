import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers/index';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import { routerMiddleware } from 'react-router-redux';


const history = createHistory ();
const routeMiddleware = routerMiddleware (history);
const sagaMiddleware = createSagaMiddleware ();
const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e)
        return undefined
    }
}
const middlewares = [sagaMiddleware, routeMiddleware];

const persistedState = loadFromLocalStorage()
export default function configureStore () {
    const store = createStore (reducers, persistedState,
        compose (applyMiddleware (...middlewares)));

    sagaMiddleware.run (rootSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept ('../reducers/index', () => {
            const nextRootReducer = require ('../reducers/index');
            store.replaceReducer (nextRootReducer);
        });
    }
    return store;
}
export { history };
