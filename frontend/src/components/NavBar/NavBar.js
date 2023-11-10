import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';


function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  // let dashboardRoute;
  // if (user) {
  //   switch (user.role) {
  //     case "admin":
  //       dashboardRoute = "/adminpanel";
  //       break;
  //     case "staff":
  //       dashboardRoute = "/staffpanel";
  //       break;
  //     case "kitchen":
  //       dashboardRoute = "/meals";
  //       break;
  //     case "pharmacy":
  //       dashboardRoute = "/pharmacy";
  //       break;
  //     default:
  //       dashboardRoute = "/";
  //   }
  // }

  return (
    <div className="div-nav-bar">
      <div className="navBarLeft">
        <Link to="/" className="logo-link">
          {/* <img className="img-logo" src={logo} alt="site logo" /> */}
        </Link>
      </div>
      <div className="navBarRight">
        <ul className="navBarItemList">
          {user && user.email && (
            <li className="navBarItem">
              <span className="loggedemail">{user.email}</span>
            </li>
          )}
          <li className="navBarItem" id='ourcenteritem'>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="navBarItem">
            <Link to="/packageFetch" className="link">
              Packages
            </Link>
          </li>
          <li className="navBarItem">
            <Link to="/contactus" className="link">
              Contact Us
            </Link>
          </li>
          {/* <li className="navBarItem">
            <Link to={dashboardRoute} className="link">
              Dashboard
            </Link>
          </li> */}
          {!user ? (
            <>
              <li className="navBarItem">
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
              {/* <li className="navBarItem">
                <Link to="/signup" className="link">
                  Sign-Up
                </Link>
              </li> */}
            </>
          ) : (
            <div className="logoutAndEmail">
              <li className="navBarItem" onClick={handleClick}>
                <Link to="/" className="link">
                  <b>LogOut</b>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
