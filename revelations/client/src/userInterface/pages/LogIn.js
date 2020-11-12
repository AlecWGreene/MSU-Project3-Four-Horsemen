import React from "react";
import "../styles/logIn.css"

function LogIn() {
  return (
    <div className="custom-border-lg">
      <h1>Current: Login page</h1>
      <div id="logInPosition" className="container">
        <div className="Row justify-content-center d-flex">
          <div className="col-md-6 customDivOne"> 
            <div className="customDivTwo">
              <div id="codaFont" className="form-group">
                <label id="customFont" for="exampleInputEmail1">Username</label>
                <input type="username" className="form-control" id="exampleInputEmail1" placeholder="user123" />
              </div>
              <div className="form-group">
                <label id="customFont" for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;