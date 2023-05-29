import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from "../sagas/";
import rootReducer from './root_reducer';
import connected_routes from '../helpers/connected_routes';
const {middleware, enhancer} = connected_routes;
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(middleware, sagaMiddleware);
const composeEnhancers = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;  


const store = createStore(rootReducer, composeEnhancers(enhancer,middlewares));
sagaMiddleware.run(sagas);

export default store;
