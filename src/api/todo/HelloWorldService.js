import axios from "axios";

class HelloWorldService {

  executeHelloWorldService() {
    console.log("executed executeHelloWorldService ");
    return axios.get("http://localhost:8083/hi");
    
  }

  
}
export default new HelloWorldService();
