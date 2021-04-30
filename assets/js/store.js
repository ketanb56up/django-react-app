import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loaduserReducer, userReducer } from "./Redux/Reducer/userReducer";
import { authorAllBookReducer, bookReducer, updateBookReducer } from "./Redux/Reducer/bookReducer";


const reducer = combineReducers({
    users: userReducer,
    loaduser: loaduserReducer,
    bookRe: bookReducer,
    authorAllBook: authorAllBookReducer,
    updateBook: updateBookReducer
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
;
