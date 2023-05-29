import { LOAD_SPINNER, UNLOAD_SPINNER } from "../helpers/action_types";
const loading_reducer = (state=false, action) =>{
    switch(action.type) {
        case LOAD_SPINNER: return true;

        case UNLOAD_SPINNER: return false;

        default: return state;
    }

}
export default loading_reducer;