import TodoItem from "./todo_item";
const Todos = ({ users_todos }) => {
    const {todos,users} = users_todos;
    return (
        < div className="card" >
            <ul className="list-group list-group-flush d-flex flex-column">
                {todos.allIds.map((e,i)=>{
                    let todo =todos.byId[e];
                    let user = users.byId[todo.userId];
                    return <TodoItem todo = {todo} user={user} id={e} todos={todos} key={i}/>;
                })}
            </ul>
        </div >
    );
};

export default Todos;