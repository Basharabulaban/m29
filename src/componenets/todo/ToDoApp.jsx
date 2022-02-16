import react, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import withParams from "./withParams";
import withNavigation from "./WithNavigation.jsx";
import { useParams } from "react-router-dom";
import HeaderComponenet from "./HeaderComponenet";
import FotterComponenet from "./FotterComponenet";
import LogoutComponenet from "./LogoutComponenet";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodoCompnent from "./ListTodoCompnent";
import AuthenticatedRoute from "./AuthenticatedRoute";

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);

    const HeaderComponentWithNavigation = withNavigation(HeaderComponenet);

    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponentWithNavigation />
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route
              path="/welcome/:name"
              element={
                <AuthenticatedRoute>
              <WelcomeComponentWithParams />
              </AuthenticatedRoute>
              }
            />
            <Route
              path="/Todos"
              element={
                <AuthenticatedRoute>
                  <ListTodoCompnent />
                </AuthenticatedRoute>
              }
            />
            <Route path="/Logout" element={<LogoutComponenet />} />

            <Route path="/*" element={<ErrorComponenet />} />
          </Routes>
          <FotterComponenet />
        </Router>
      </div>
    );
  }
}

function ErrorComponenet() {
  return <div>An Error occured , contact supoport</div>;
}

export default TodoApp;
