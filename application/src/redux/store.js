import {applyMiddleware, legacy_createStore as createStore, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import {  getProductreducer } from "./reducer/datareducer";
import { Productdetreducer } from "./reducer/productreducer";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
      );

        const rootReducer= combineReducers({
            getProduct:  getProductreducer,
            // ProductDetails: Productdetreducer
        })

    export const store = createStore(rootReducer, enhancer);