import axios from "axios";


class AuthenticationService {
  registerSucessfulLogin(username, password) {
    console.log("Register sucessfully");
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors();

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
  setupAxiosInterceptors() {
    let username = "basharusr";
    let password = "basharpw";
    let basicAuthentication = "Basic " + window.btoa(`${username}:${password}`);

    axios.interceptors.request.use((config) => {
      if (this.IsUserLoggedIn()) {

        config.headers.Authorization = basicAuthentication
      }
      return config
    });
  }
}

export default new AuthenticationService(); // export the instanse
// for React components w export the class directly ,
// for helper services , we export an instance of the class - an object

// the sessionstorage property allows you to acess a session storage object for the current origin

// data stored in localstorage has no expiration time
// data stored in session Storage gets cleared when the page session ends
