import counterReducer from "./counter";
import formReducer from "./form";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    form: formReducer,
})

export default rootReducer;