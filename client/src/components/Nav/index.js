import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo1.png';
function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row" >
          <li className="signup-login">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="signup-login">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="flex-row">
          <div className="signup-login">
            <Link to="/signup">
              Signup
            </Link>
          </div>
          <div className="signup-login">
            <Link to="/login">
              Login
            </Link>
          </div>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-3 navbar-round">
      <h1 className="flex-row">
        <Link to="/" >
          <img src={logo} alt="logo" className="logo" />
          Home
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
