import { useState } from "react";
import { GO_BACK,LOAD_SPINNER, UPDATE_TODO} from "../helpers/action_types";
import { useDispatch } from "react-redux";
const Todo = ({users_todos,id}) => {
    const dispatch = useDispatch();
    
    const {todos,users} = users_todos;
    const [checked,setChecked] = useState(todos.byId[id].completed);
    const [title,setTitle] = useState(todos.byId[id].title);
    function changeChecked() {
        setChecked(!checked);
    }
    function handleUpdate(){
        let obj = {id,
            userId: todos.byId[id].userId,
            title,
            completed: checked
        }
        dispatch({type: LOAD_SPINNER});
        dispatch({type: UPDATE_TODO,payload: {obj,todos}});        
    }
    return (
        <div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Your todo title</label>
                <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="exampleFormControlInput1" value = {title} placeholder="Enter your todo title" />
            </div>
            <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" id="" role="button"
                    checked={checked ? true : false} onChange={changeChecked}
                />
                <label className="form-check-label" htmlFor="">
                    Completed
                </label>
            </div>
            <div className="my-3">
                <p>Posted By: {users.byId[todos.byId[id].userId].name}</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                <button className="btn btn-primary" onClick={()=>{dispatch({type: GO_BACK, payload: {todos: 'todos'}})}}>Go back</button>
            </div>

        </div>
    );
}
export default Todo;