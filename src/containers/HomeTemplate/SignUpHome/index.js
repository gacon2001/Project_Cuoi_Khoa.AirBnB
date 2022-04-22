import React, { Fragment,useState } from 'react';
import { actSignUp } from "./modules/action";
import { useDispatch } from "react-redux";
// import "../style_base.css"

export default function SignUpHome(props) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    address: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(actSignUp(state));
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id={props.id}
        tabIndex="-1"
        aria-labelledby="signUpLabel"
        aria-hidden="true"
      >
        <div style={{ color: "black" }} className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header justify-content-center">
              <h5 className="modal-title" id="signUpLabel">
                Sign up
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <label>Name Account</label>
                  <input
                    className="form-control"
                    name="name"
                    onChange={handleOnChange}
                  />
                </div>
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
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    className="form-control"
                    name="phone"
                    type="number"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Birthday</label>
                  <input
                    className="form-control"
                    name="birthday"
                    value={state.birthday}
                    type="date"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <div className="d-flex">
                    <div className="form-check mr-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value={true}
                        defaultChecked
                        onChange={handleOnChange}
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value={false}
                        onChange={handleOnChange}
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    className="form-control"
                    name="address"
                    type="text"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">
                   Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
