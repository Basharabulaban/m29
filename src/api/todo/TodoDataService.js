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

}

export default new TodoDataService();