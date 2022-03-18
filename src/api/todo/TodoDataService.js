import axios from "axios";
import  {API_URL}  from "../../Constants";
import  {API_JPA_URL}  from "../../Constants";
class TodoDataService {
  executeHelloWorldService() {
    /////  console.log("executed executeHelloWorldService ");
    return axios.get("$API_URL/hi");
  }

  executeHelloWorldbeanService() {
    ////   //  console.log(" executeHelloWorldbeanService ");
    return axios.get("$API_URL/hello-world-been");
  }
  RetrieveAllTodos(username) {
    //  console.log("executeRetrieveTodos ");
    return axios.get(`${API_JPA_URL}/users/${username}/todos`);
  }
  DeleteTodoService(username, id) {
    console.log("on services delete");
    console.log("on services delete " + username);
    console.log("on services delete " + id);

    return axios.delete(`${API_JPA_URL}/users/${username}/todos/${id}`);
  }

  UpdateTodos(username, id, todo) {
  
      return axios.put(`${API_JPA_URL}/users/${username}/todos/${id}`, todo);
  
  }

  AddTodos(username, todo) {
  
   
      return axios.post(`${API_JPA_URL}/users/${username}/todos`, todo);
    
  }

  RetrieveSpecficTodos(name, id) {
    console.log("RetrieveSpecficTodos ");
    return axios.get(`${API_JPA_URL}/users/${name}/todos/${id}`);
  }
}

export default new TodoDataService();