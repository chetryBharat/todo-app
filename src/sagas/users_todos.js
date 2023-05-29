import { call,put } from "redux-saga/effects";
import users_api from "../api/users_api";
import todos_api from "../api/todos_api";
import { GET_USERS_AND_TODOS } from "../helpers/action_types";
function *users_todos() {
    let users = yield call(users_api);
    let todos = yield call(todos_api);
    // todos = todos.slice(0,20);
    // console.log("API CALLED");
    users = normalise(users);
    todos = normalise(todos);

    let users_todos = {users,todos};
    yield put({type:GET_USERS_AND_TODOS, users_todos});

    
}

function normalise(users) {
    let allIds = users.map((e) => e.id);
    let byId = {};

    users.forEach((e) => {
        let { id, ...rem } = e;
        byId = { ...byId, [id]: rem };
    });

    users = { 'byId': byId , 'allIds': allIds };
    return users;
}
export default users_todos;