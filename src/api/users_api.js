import axios from "axios";
const users_api =(id) =>{
     const users = axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        return res.data;
      });
      return users;
};
export default users_api;