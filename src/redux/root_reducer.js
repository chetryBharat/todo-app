import { combineReducers } from "redux";
import url_reducer from "./url_reducer";
import users_todos_reducer from "./users_todos_reducer";
import loading_reducer from "./loading_reducer";
import connected_routes from "../helpers/connected_routes";
const {reducer: location} = connected_routes;



const rootReducer = combineReducers({url_reducer,users_todos_reducer,loading_reducer,location});


export default rootReducer;