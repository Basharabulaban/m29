import axios from "axios";


class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
  //  let basicAuthentication = this.createBasicAuthToken(username, password)
    return axios.get("http://localhost:8083/basicauth", {
      headers: {
        Authorization: this.createBasicAuthToken(username, password),
       // need to enable JWT Auth
      },
    });


    
  }

  executeJWTAuthenticationService(username, password) {
    //  let basicAuthentication = this.createBasicAuthToken(username, password)
      return axios.post("http://localhost:8083/authenticate", {
       
         username, password
         // need to enable JWT Auth
    
      });
  
  
      
    }
    createJWTToken(token){
      return "Bearer " + token ;

    }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(`${username}:${password}`);
  }
  
  registerSucessfulLoginforJWT(username, token) {
     
      console.log("Register sucessfully");
      sessionStorage.setItem("authenticatedUser", username);

      this.setupAxiosInterceptors(this.createJWTToken(token));
    }

  registerSucessfulLogin(username, password) {
  //  let basicAuthentication = this.createBasicAuthToken(username, password)

    console.log("Register sucessfully");
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  Loggedout() {
    sessionStorage.removeItem("authenticatedUser");
    console.log("LOgged out");
  }

  IsUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) return false;
    else return true;
  }

  getLoggedInUsersName() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) return "";
    else return user;
  }
  setupAxiosInterceptors(basicAuthentication) {
    axios.interceptors.request.use((config) => {
      if (this.IsUserLoggedIn()) {
        config.headers.Authorization = basicAuthentication;
      }
      return config;
    });
  }
}

export default new AuthenticationService(); // export the instanse
// for React components w export the class directly ,
// for helper services , we export an instance of the class - an object

// the sessionstorage property allows you to acess a session storage object for the current origin

// data stored in localstorage has no expiration time
// data stored in session Storage gets cleared when the page session ends
