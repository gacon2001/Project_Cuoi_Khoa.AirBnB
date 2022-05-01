import React, { Fragment, useState } from "react";
import { actSignUp } from "./modules/action";
import { useDispatch } from "react-redux";
import "../_auth.scss";

const checkEmpty = (value) => {
  let error;
  if (!value || value.length === 0) {
    error = "Không được để trống";
  } else if (typeof value === "string" && value.trim() != "") {
    error = "";
  }
  return error;
};
const checkName = (value) => {
  let error;
  var pattern = /(?=([a-z][A-Z]{1,32}$|[A-Z][a-z]{1,32}$))/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    // console.log(value.match(pattern));
    error = "";
  } else {
    error =
      "Tên phải là kiểu chữ bao gồm hoa và thường, viết hoa chữ cái đầu tiên và phải viết liền, từ 1 đến 32 kí tự";
  }
  return error;
};
const checkEmail = (value) => {
  let error;
  var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    // console.log(value.match(reg));
    error = "";
  } else {
    error = "Email phải đúng định dạng a@gmail.com";
  }
  return error;
};
const checkPhoneNumber = (value) => {
  let error;
  var pattern = /^\d{10}$/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error = "Phone phải đủ đúng 10 số";
  }
  return error;
};
const checkPassword = (value) => {
  let error;
  var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error =
      "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  }
  return error;
};

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

  const validateName = () => {
    const nameErrors = checkEmpty(state.name) || checkName(state.name);
    // if (lanDau) return "";
    return nameErrors;
  };
  const validateEmail = () => {
    const emailErrors = checkEmpty(state.email) || checkEmail(state.email);
    return emailErrors;
  }
  const validatePassword = () => {
    const passwordErrors = checkEmpty(state.password) || checkPassword(state.password);
    return passwordErrors;
  }
  const validatePhone = () => {
    const phoneErrors = checkEmpty(state.phone) || checkPhoneNumber(state.phone);
    return phoneErrors;
  }
  const validateAddress = () => {
    const addressErrors = checkEmpty(state.address);
    return addressErrors;
  }

  return (
    <Fragment>
      <div
        className="modal fade signup"
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
                  <span>
                    {validateName()}
                  </span>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    name="email"
                    onChange={handleOnChange}
                  />
                  <span>
                    {validateEmail()}
                  </span>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    name="password"
                    type="password"
                    onChange={handleOnChange}
                  />
                  <span>
                    {validatePassword()}
                  </span>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    className="form-control"
                    name="phone"
                    type="number"
                    onChange={handleOnChange}
                  />
                  <span>
                    {validatePhone()}
                  </span>
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
                  <span>
                    {validateAddress()}
                  </span>
                </div>
                <div className="form-group text-center">
                  <button type="submit">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
