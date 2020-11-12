import React, { useState, useEffect } from "react";
import { useAuth } from "../../App";
import API from "../../utils/API";
import { BrowserRouter as Router, Route, withRouter, Switch, Link, Redirect, useHistory, useLocation} from "react-router-dom";
import "../styles/signUp.css"

function SignUp(props) {
  let auth = useAuth();

  // if user is logged in, do not let them come back to landing page routes unless they log out
  useEffect(() => {
    if(auth.user === "guest" || auth.user === "user"){
      props.history.push("/game");
    }
  },[])

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    event.preventDefault();
    const id = event.currentTarget.id;
    const value = event.target.value.trim();
    setFormState((prevState) => {
      return { ...prevState, [id] : value}
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formState.username !== "" && formState.email !== "" && formState.password !== "") {
      API.userSignUp({
        username: formState.username,
        email: formState.email,
        password: formState.password
      })
        .then((res) => {
          console.log(res)
          loginUser(res.data);
          // window.location.replace("/login")
        })
        .then(() => setFormState({
          username: "",
          email: "",
          password: ""
        }))
        .catch(err => console.log(err));
    }
  };

  const loginUser = (data) => {
    API.userLogIn({
      username: data.username,
      password: data.password
    })
      .then((res) => {
        console.log(res.data)
        const route = res.data ? "/game" : "/login";
        window.location.replace(route)
      })
  };

  return (
    <div className="custom-border-lg" >

      <div className="container test">

        <div id="signUpPosition" className="Row justify-content-center d-flex">

          <div className="col-sm-10 customDivOne"> 

            <div className="customDivTwo">

              <div id="codaFont" className="form-group">
                <label id="customFont" for="username">Username</label>
                <input type="username" className="form-control" id="username" value={formState.username} onChange={handleInputChange} placeholder="user123" />
              </div>

              <div id="codaFont" className="form-group">
                <label id="customFont" for="email">Email address</label>
                <input type="email" className="form-control" id="email" value={formState.email} onChange={handleInputChange} placeholder="name@email.com" />
              </div>

              <div className="form-group">
                <label id="customFont" for="password">Password</label>
                <input type="password" className="form-control" value={formState.password} onChange={handleInputChange} id="password" />
              </div>

              <button 
                type="submit" 
                className="button"
                onClick={handleSubmit}
                >
                  Submit
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

}

export default withRouter(SignUp);