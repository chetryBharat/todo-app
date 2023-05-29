import axios from 'axios';
function updateTodo(obj) {
    const updated_Todos = axios.patch(`https://jsonplaceholder.typicode.com/todos/${obj.id}`,JSON.stringify(obj),{
        headers: {
            "Content-Type":'application/json'
        }
    })
    .then(res => {
      return res.data;
    });
    return updated_Todos;
}
export default updateTodo;