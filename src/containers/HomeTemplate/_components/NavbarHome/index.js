import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h3 className="navbar-brand" href="#">
          AirBnB
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link>Nơi ở</Link>
            </li>
            <li className="nav-item active" style={{marginLeft:"10px"}}>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>

        <button className="btn btn-success" onClick={()=> history.push("/signin-home")}>Signin</button>
        <button className="btn btn-info" onClick={()=> history.push("/signup-home")}>Signup</button>
      </div>
    </nav>
  );
}
