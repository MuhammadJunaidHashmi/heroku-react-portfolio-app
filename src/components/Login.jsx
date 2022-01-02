import React, { useState } from "react";
import axios from "axios";
const Login = () => {

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;
  
  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };


  const onSubmit = async (e) => {

    e.preventDefault();
    await axios.post("http://localhost:3003/service", login);
    // history.push("/services");
  
  };

  return (
    <div className="container" style={{ display: "flex", justifyContent: "center"}}>
      <div
        style={{ marginTop: 100}}
        className="col-md-6 login-form-1 bg-dark "
      >
        <h3>Login </h3>
        <br></br>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email *"
          
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Your Password *"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btnSubmit" onClick={()=>{alert("Wrong Email and Password");
          }} value="Login">
            Login
          </button>
        </div>
        <div className="form-group">
          <a href="#" className="btnForgetPwd">
            Forget Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
