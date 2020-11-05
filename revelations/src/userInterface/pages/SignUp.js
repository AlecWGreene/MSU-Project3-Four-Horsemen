import React from "react";
import "../styles/signUp.css"
import loginTwo from "../assets/loginTwo.png";

const BACKGROUND = {
  backgroundImage: `url(${loginTwo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  position: 'fixed', 
  height: '95%',  
  width: '100%'
}

function SignUp() {
  return (

    <div style={BACKGROUND}>
      <h1>Current: Sign-up page</h1>

    <div className="container">
      <div id="signUpPosition" className="Row justify-content-center d-flex">
          <div className="col-md-6 customDivOne"> 
            <div className="customDivTwo">
              <div id="codaFont" className="form-group">
                <label id="velocityFont" for="exampleInputEmail1">Username</label>
                <input type="username" className="form-control" id="exampleInputEmail1" placeholder="user123" />
              </div>
              <div id="codaFont" className="form-group">
                <label id="velocityFont" for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@email.com" />
              </div>
              <div className="form-group">
                <label id="velocityFont" for="exampleInputPassword1">Password</label>
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

export default SignUp;