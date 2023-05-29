import { useState } from "react";
import { useDispatch } from "react-redux";
import { VIEW_EDIT_TODO,UPDATE_TODO,LOAD_SPINNER} from "../helpers/action_types";
const Todo_item =({todo,user,id,todos}) =>{
    const dispatch = useDispatch();
    const [checked,setChecked] = useState(todo.completed);
    function changeChecked() {
        dispatch({type: LOAD_SPINNER});
        setChecked(!checked);
        let obj = todo;
        obj.id = id;
        obj.completed = !checked;
        dispatch({type: UPDATE_TODO,payload: {obj,todos}});

    }
    function viewSingleTodo() {
        // dispatch({type: LOAD_SPINNER});
        return dispatch({type: VIEW_EDIT_TODO,payload: {id}});
    }

    return (
        <li className= {todo.completed ? `list-group-item order-2`: `list-group-item order-1`} >
                    <div className="d-flex justify-content-between">
                        <p className="text-primary" role="button" onClick={viewSingleTodo}>{todo.title}</p>
                        <p className="text-info">By: {user.name}</p>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" id="" role="button"
                          checked={checked ? true : false} onChange={changeChecked} 
                        />

                        <label className="form-check-label" htmlFor="">
                            Completed
                        </label>
                    </div>
                </li>
    );
}
export default Todo_item;