import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUpHome from "containers/HomeTemplate/Auth/SignUpHome";
import SignInHome from "containers/HomeTemplate/Auth/SignInHome";
import HamburgerIcon from "../Icons/HamburgerIcon";
import PersonIcon from "../Icons/PersonIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "../Icons/Logo";
// import "./navbarHome.css";
import "./_navHome.scss";
import { useDispatch } from "react-redux";
import { actUploadAvatarApi } from "containers/AdminTemplate/Avatar/modules/actions";

export default function NavbarHome() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [avatar, setAvatar] = useState({
    avatar: "",
  });
  const handleOnChange = (event) => {
    const { files } = event.target;
    dispatch(actUploadAvatarApi(files[0]));
    setAvatar({
      [files]: files[0],
    });
  };

  const user = JSON.parse(localStorage.getItem("User"));
  const handleLogout = () => {
    localStorage.clear();
  };
  const handleLogin = () => {
    if (localStorage.getItem("User")) {
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
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ zIndex: 10 }}
          >
            <HamburgerIcon></HamburgerIcon>

            {/* sau khi user đăng nhập vào và muốn upload avatar */}
            <PersonIcon type="file" onClick={handleOnChange}></PersonIcon>
          </div>
        </button>
      );
    }
  };
  return (
    <div className="navHome pb-5">
      <div className="container navHome_container">
        <div className="nav_logo">
          <Logo></Logo>
        </div>
        <div>
          <ul className="ul">
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
        <div className="nav_host">
          <span
            className="pr-3 responsive-992px"
            style={{
              display: `${localStorage.getItem("User") ? "none" : "block"}`,
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
  );
}
