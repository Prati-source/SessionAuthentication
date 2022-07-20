import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile"

let reducers;
export default reducers = combineReducers({
        auth,
        profile,
});


