import axios from "axios";

class HelloWorldService {

  executeHelloWorldService() {
    console.log("executed executeHelloWorldService ");
    return axios.get("http://localhost:8083/hi");
    
  }

  executeHelloWorldbeanService() {
    console.log(" executeHelloWorldbeanService ");
    return axios.get("http://localhost:8083/hello-world-been");
    
  }
  executehelloworldpathvariable(name) {
    console.log(" executehelloworldpathvariable ");
    return axios.get(`http://localhost:8083/hello-world-path-variable/${name}`);
    
  }
  
}
export default new HelloWorldService();
