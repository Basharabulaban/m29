class AuthenticationService {

    


registerSucessfulLogin(username,password){
    console.log(username);
sessionStorage.setItem('authenticatedUser',username);

    
}

Loggedout() {

    sessionStorage.removeItem('authenticatedUser');
    console.log("LOgged out");
  }
}

export default new AuthenticationService(); // export the instanse
// for React components w export the class directly , 
// for helper services , we export an instance of the class - an object


// the sessionstorage property allows you to acess a session storage object for the current origin

// data stored in localstorage has no expiration time
// data stored in session Storage gets cleared when the page session ends