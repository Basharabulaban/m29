import axios from "axios";
class TodoDataService {

    executeHelloWorldService() {
      /////  console.log("executed executeHelloWorldService ");
        return axios.get("http://localhost:8083/hi");
        
      }
    
      executeHelloWorldbeanService() {
   ////   //  console.log(" executeHelloWorldbeanService ");
        return axios.get("http://localhost:8083/hello-world-been");
        
      }
      RetrieveAllTodos(name) {
      //  console.log("executeRetrieveTodos ");
        return axios.get(`http://localhost:8083/users/${name}/todos`);
        
      }
      DeleteTodoService(username, id) {
        console.log("on services delete");
        console.log("on services delete "+ username)
        console.log("on services delete "+ id)

        
        return axios.delete(`http://localhost:8083/users/${username}/todos/${id}`);
      }

      UpdateTodos(username, id ,todo) {
      
        console.log("UpdateTodos "+ username)
        console.log("UpdateTodos "+ id)
        console.log("UpdateTodos "+ todo)
  
        if (id <=0 ) {
          return axios.post(`http://localhost:8083/users/${username}/todos`,todo);
      
        }else if (id >0 ) {
              return axios.put(`http://localhost:8083/users/${username}/todos/${id}`,todo);
         
        }
 
      }

      RetrieveSpecficTodos(name,id) {
          console.log("RetrieveSpecficTodos ");
          return axios.get(`http://localhost:8083/users/${name}/todos/${id}`);
          
        }

}

export default new TodoDataService();