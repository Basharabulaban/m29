import axios from "axios";
import  {API_URL}  from "../../Constants";

class HelloWorldService {
  executeHelloWorldService() {
    // let username ="basharusr"
    // let password = "basharpw"
    // let basicAuthentication = 'Basic ' +  window.btoa(`${username}:${password}`);
    console.log("executed executeHelloWorldService ");
    return axios.get('$API_URL/hi'
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

    return axios.get('$API_URL/hello-world-been'
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
      `${API_URL}/hello-world-path-variable/${name}`
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
