import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUpHome from "containers/HomeTemplate/Auth/SignUpHome";
import SignInHome from "containers/HomeTemplate/Auth/SignInHome";
import HamburgerIcon from "../Icons/HamburgerIcon";
import PersonIcon from "../Icons/PersonIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "../Icons/Logo";
import "./navbarHome.css";
// import "./../../style_base.css"

export default function NavbarHome() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("Admin"));
  const handleLogout = () => {
    localStorage.clear();
  };
  const handleLogin = () => {
    //!check đăng nhập vào với 
    if (localStorage.getItem("Admin")) {
      return (
        <div>
          <div className="d-flex justify-content-between align-items-center row">
            <div className="col-sm-10">
              <span>{user.user.name}</span>
            </div>
            <div className="col-sm-2">
              <Link to="/" onClick={handleLogout} className="btn text-light">
                <LogoutIcon />
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <button
          className="btn btn-light"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false"
          style={{ border: "1px solid black" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <HamburgerIcon></HamburgerIcon>
            <PersonIcon></PersonIcon>
          </div>
        </button>
      );
    }
  };
  return (
    <div style={{ backgroundColor: "black" }} className="homenav pb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-4 pt-3">
            <Logo></Logo>
          </div>
            <div className="ul">
              <ul className="navbar-nav mr-auto ul" >
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          <div className="col-sm-4 mt-4 d-flex justify-content-lg-end align-items-center">
          <span
              className="pr-3 responsive-992px"
              style={{
                display: `${localStorage.getItem("Admin") ? "none" : "block"}`,
              }}
            >
              Become a Host <LanguageIcon />
            </span>
            <div className="dropdown pl-3">
              {handleLogin()}
              <div
                className="dropdown-menu dropdown-menu--modify"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  type="button"
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#signUpModal"
                >
                  Sign Up
                </a>
                <a
                  type="button"
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target="#signInModal"
                >
                  Sign In
                </a>
              </div>

              <SignUpHome id="signUpModal" />
              <SignInHome id="signInModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
