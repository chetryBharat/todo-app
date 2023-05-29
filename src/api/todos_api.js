import axios from "axios";
const todos_api =() =>{
     const todos = axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        return res.data;
      });
      return todos;
};
export default todos_api;