import axios from "axios";
import  {API_URL}  from "../../Constants";
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../../Constants"  ;


class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
  //  let basicAuthentication = this.createBasicAuthToken(username, password)
    return axios.get(`${API_URL}/basicauth`, {
      headers: {
        Authorization: this.createBasicAuthToken(username, password),
       // need to enable JWT Auth
      },
    });


    
  }

  executeJWTAuthenticationService(username, password) {
    //  let basicAuthentication = this.createBasicAuthToken(username, password)
      return axios.post(`${API_URL}/authenticate`, {
       
         username, password
         // need to enable JWT Auth
    
      });
       
    }

    // to be  test it
    RefreashJWTAuthenticationService(token) {
      //  let basicAuthentication = this.createBasicAuthToken(username, password)
        return axios.get(`${API_URL}/refresh`, {
          headers: {
            Authorization: this.createJWTToken(token),
        
          },
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
      sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

      this.setupAxiosInterceptors(this.createJWTToken(token));
    }

  registerSucessfulLogin(username, password) {
  //  let basicAuthentication = this.createBasicAuthToken(username, password)

    console.log("Register sucessfully");
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  Loggedout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    console.log("LOgged out");
  }

  IsUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

    if (user === null) return false;
    else return true;
  }

  getLoggedInUsersName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

    if (user === null) return "";
    else return user;
  }
  setupAxiosInterceptors(basicAuthenticationORToken) {
    axios.interceptors.request.use((config) => {
      if (this.IsUserLoggedIn()) {
        config.headers.Authorization = basicAuthenticationORToken;
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
