import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    image: "",
  });
  const { registerResult } = useSelector((state) => state.users);
  const refresh = () => {
    window.location.href = "/login";
  };

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (
      form.username === "" ||
      form.password === "" ||
      form.email === "" ||
      form.image === ""
    ) {
      alert("Please fill all fields");
    } else {
      dispatch(registerUser(form));
    }
  };
  useEffect(() => {
    if (registerResult) {
      refresh();
    }
  }, [registerResult, dispatch]);
  return (
    <>
      <div className="container">
        <h1>Register Page</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
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
            <label for="exampleInputEmail1" className="form-label">
              Image
            </label>
            <input
              onChange={(e) => setForm({ ...form, image: e.target.value })}
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

export default Register;
