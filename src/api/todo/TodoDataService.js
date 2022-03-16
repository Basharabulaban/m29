import axios from "axios";
import  {API_URL}  from "../../Constants";

class TodoDataService {

    executeHelloWorldService() {
      /////  console.log("executed executeHelloWorldService ");
        return axios.get('$API_URL/hi');
        
      }
    
      executeHelloWorldbeanService() {
   ////   //  console.log(" executeHelloWorldbeanService ");
        return axios.get('$API_URL/hello-world-been');
        
      }
      RetrieveAllTodos(name) {
      //  console.log("executeRetrieveTodos ");
        return axios.get(`${API_URL}/users/${name}/todos`);
        
      }
      DeleteTodoService(username, id) {
        console.log("on services delete");
        console.log("on services delete "+ username)
        console.log("on services delete "+ id)

        
        return axios.delete(`${API_URL}/users/${username}/todos/${id}`);
      }

      UpdateTodos(username, id ,todo) {
      
        console.log("UpdateTodos "+ username)
        console.log("UpdateTodos "+ id)
        console.log("UpdateTodos "+ todo)
  
        if (id <=0 ) {
          return axios.post(`${API_URL}/users/${username}/todos`,todo);
      
        }else if (id >0 ) {
              return axios.put(`${API_URL}/users/${username}/todos/${id}`,todo);
         
        }
 
      }

      RetrieveSpecficTodos(name,id) {
          console.log("RetrieveSpecficTodos ");
          return axios.get(`${API_URL}/users/${name}/todos/${id}`);
          
        }

}

export default new TodoDataService();