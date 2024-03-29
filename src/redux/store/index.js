import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "../modules";
import logger from 'redux-logger';

export const store = createStore(allReducers, {}, compose(
            applyMiddleware(logger)
        ));