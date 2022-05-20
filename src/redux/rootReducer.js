import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    profileReducer,
    messagesReducer,
    usersReducer,
    authReducer,
})

export default rootReducer;