import { GET_USERS_AND_TODOS, UPDATE_INITIAL_STATE } from "../helpers/action_types";
const users_todos_reducer =(state = {}, action) => {
    switch(action.type) {
        case GET_USERS_AND_TODOS : return action.users_todos;
        case UPDATE_INITIAL_STATE : return {users: state.users, todos: action.todos};
        default: return state;
    }

}
export default users_todos_reducer;