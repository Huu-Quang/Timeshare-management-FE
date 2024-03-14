import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../provide";
import axios from "axios";

const Register = () => {
  const navigation = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const loginContext = useContext(GlobalContext);
  const { isLogin } = loginContext;

  const handleRegisterFunction = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        // The base URL is set in index.js: axios.defaults.baseURL = "https://localhost:7117/api/";

        // Call the register API
        const response = await axios.post("/Auth/register", data);

        // Check the request
        if (response.status === 200 && response.data.isSucceed) {
          alert("Register Success");
          navigation("/login"); // Redirect to the login page after successful registration
        } else {
          alert("Register failed");
        }
      }
    } catch (err) {
      console.error(err);
      alert("Register failed");
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Validate form fields and update errors if necessary
    if (!data.name) {
      formIsValid = false;
      errors["name"] = "Please enter name";
    }

    if (!data.username) {
      formIsValid = false;
      errors["username"] = "Please enter username";
    }

    if (!data.email) {
      formIsValid = false;
      errors["email"] = "Please enter email";
    }

    if (!data.password) {
      formIsValid = false;
      errors["password"] = "Please enter password";
    }

    if (!data.phoneNumber) {
      formIsValid = false;
      errors["phoneNumber"] = "Please enter phone";
    }

    setErrors(errors);
    return formIsValid;
  };

  useEffect(() => {
    if (isLogin) {
      navigation("/");
    }
  }, [isLogin, navigation]);

  return (
    <div className={"registersform"}>
      <div className="flexsForm">
        <h1>Sign Up</h1>
        <div className="dividerSocial"></div>
        <form>
          <div className="textField">
            <label>Name</label>
            <input
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <span className="error">{errors["name"]}</span>
          </div>
          <div className="textField">
            <label>User name</label>
            <input
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <span className="error">{errors["username"]}</span>
          </div>
          <div className="textField">
            <label>Email</label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <span className="error">{errors["email"]}</span>
          </div>
          <div className="textField">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <span className="error">{errors["password"]}</span>
          </div>
          <div className="textField">
            <label>Phone Number</label>
            <input
              type="text"
              pattern="[0-9]*"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setData({ ...data, phoneNumber: value });
              }}
            />
            <span className="error">{errors["phoneNumber"]}</span>
          </div>
          <button onClick={(e) => handleRegisterFunction(e)}>SIGN UP</button>
        </form>
      </div>
      <span className="divider"></span>
      <div className="loginsForm">
        <h3>Already have an account!</h3>
        <Link to={"/login"}>
          <button className="registerButton">SIGN IN HERE</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;