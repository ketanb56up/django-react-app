import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Redux/Reducer/userReducer";


const reducer = combineReducers({
    users: userReducer,
});

const persistConfig = {
    key: 'assignment-storage',
    storage,
}

const presistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    presistedReducer,
    composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { persistor, store };
