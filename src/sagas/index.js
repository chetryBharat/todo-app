import { call, take,all,put,takeEvery} from 'redux-saga/effects';
import { INITIAL_STATE, UPDATE_TODO, VIEW_SINGLE_TODO,UNLOAD_SPINNER } from '../helpers/action_types';
import update_todo from './update_todo';
import users_todos from './users_todos';

function *updateTodo() {
    // yield put({type: LOAD_SPINNER});
    yield takeEvery(UPDATE_TODO,update_todo);
}

function *initialState() {
    // yield put({type: LOAD_SPINNER});
    yield take(INITIAL_STATE);
    yield call(users_todos);
    yield put({type: UNLOAD_SPINNER});
}

function *viewTodo() {
    yield take(VIEW_SINGLE_TODO);
    yield call(users_todos);
}

function *updateTodoCompleted() {

}

 
function* mySaga() {
 yield all([
     initialState(),
     updateTodo(),
     viewTodo(),
     updateTodoCompleted(),
 ]);
}
export default mySaga;