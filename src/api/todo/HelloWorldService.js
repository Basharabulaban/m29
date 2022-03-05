import axios from "axios";

class HelloWorldService {
  executeHelloWorldService() {
    // let username ="basharusr"
    // let password = "basharpw"
    // let basicAuthentication = 'Basic ' +  window.btoa(`${username}:${password}`);
    console.log("executed executeHelloWorldService ");
    return axios.get("http://localhost:8083/hi"
    // ,
     
    // {
    //   headers :{
    //     Authorization: basicAuthentication
    //   }
     
    // }
    
    );
   
  }

  executeHelloWorldbeanService() {
    console.log(" executeHelloWorldbeanService ");
    // let username ="basharusr"
    // let password = "basharpw"
    // let basicAuthentication = 'Basic ' +  window.btoa(`${username}:${password}`);

    return axios.get("http://localhost:8083/hello-world-been"
    // ,
     
    // {
    //   headers :{
    //     Authorization: basicAuthentication
    //   }
     
    // }
      
      
      );
  }
  executehelloworldpathvariable(name) {

    // let username ="basharusr"
    // let password = "basharpw"
    // let basicAuthentication = 'Basic ' +  window.btoa(`${username}:${password}`);
    console.log(" executehelloworldpathvariable ");
    return axios.get(
      `http://localhost:8083/hello-world-path-variable/${name}`
      // , 
      // {
      //   headers :{
      //     Authorization: basicAuthentication
      //   }
       
      // }
    );
  }
}
export default new HelloWorldService();
