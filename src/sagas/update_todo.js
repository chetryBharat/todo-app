import { call,put } from "redux-saga/effects";
import updateTodo from "../api/update_todo";
import { UPDATE_INITIAL_STATE, UPDATE_TODO_AND_GO_BACK,UNLOAD_SPINNER } from "../helpers/action_types";

function *update_todo(action) {
    // console.log("update_todo");
    const updated_todo = yield call(updateTodo,action.payload.obj);
    console.log("AFTER");
    // console.log(updated_todo);
    // console.log(action.payload.todos);
    const {id,...rest} = updated_todo;
    const todos = action.payload.todos;
    todos.byId[id.toString()] = rest;
    yield put({type: UPDATE_INITIAL_STATE,todos});
    yield put({type: UNLOAD_SPINNER});
    yield put({type: UPDATE_TODO_AND_GO_BACK,payload: {todos:'todos'}});

}
export default update_todo;