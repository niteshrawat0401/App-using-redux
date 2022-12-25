import {applyMiddleware, legacy_createStore as createStore, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import { cartDatareducer } from "./reducer/cartReducer";
import { getProductreducer } from "./reducer/productsreducer";
import { Productdetreducer } from "./reducer/productdetailreducer";


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
            ProductDetails: Productdetreducer,
            cartData: cartDatareducer
        })

    export const store = createStore(rootReducer, enhancer);