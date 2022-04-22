import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actSignInApi } from "./modules/action";
// import "../style_base.css"

export default function SignInHome(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    dispatch(actSignInApi(state));
  };

  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="loginLabel"
      aria-hidden="true"
    >
      <div style={{ color: "black" }} className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title" id="loginLabel">
              Log In
            </h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  name="email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group text-center">
                <button type="submit" role="button" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
