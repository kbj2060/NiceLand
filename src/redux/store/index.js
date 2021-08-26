import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "../modules";
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage
  };

const enhancedReducer = persistReducer(persistConfig, allReducers);
export default () => {
    let store = createStore(enhancedReducer, compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      ));
    let persistor = persistStore(store)
    return { store, persistor }
  }
// export const store = createStore(enhancedReducer, applyMiddleware(logger));

// export const store = createStore(
// 	allReducers,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );