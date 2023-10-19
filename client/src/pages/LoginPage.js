import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";

const LoginPage = (props) => {
  const { loginCbHandler } = props;
  const { loginResult } = useSelector((state) => state.users);
  const refresh = () => {
    window.location.href = "/";
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {

    dispatch(loginUser(form));
  };

  useEffect(() => {
    try {
      if (loginResult) {
        refresh();
        loginCbHandler(true);
      } else {
        loginCbHandler(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [loginResult,dispatch]);

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            onClick={() => handleSubmit()}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
