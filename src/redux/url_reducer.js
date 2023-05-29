import { GO_BACK, INITIAL_STATE, VIEW_EDIT_TODO,UPDATE_TODO_AND_GO_BACK, VIEW_SINGLE_TODO} from "../helpers/action_types"
const url_reducer =(state = null, action) => {
    switch(action.type) {
        case INITIAL_STATE: {return action.payload.todos || null;}
        case VIEW_EDIT_TODO: {return action.payload.id || null;}
        case GO_BACK: {return action.payload.todos || null;}
        case UPDATE_TODO_AND_GO_BACK: {return action.payload.todos || null;}
        case VIEW_SINGLE_TODO: {return action.payload.id || null;}
        default: return state;
    }
}

export default url_reducer;