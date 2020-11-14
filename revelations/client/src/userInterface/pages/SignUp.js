import React, { useState, useEffect } from "react";
import { useAuth } from "../components/UserAuth";
import API from "../../utils/API";
import history from "../../utils/history";

function SignUp() {
  let auth = useAuth();
  const [formState, setFormState] = useState({
    username: "",
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

  // const handleKeyDown = event => {
  //   event.preventDefault();
  //   if (event.key === 'Enter') {
  //     handleSubmit(event);
  //   };
  // };

  const handleSubmit = event => {
    event.preventDefault();
    if (formState.username !== "" && formState.password !== "") {
      API.userSignUp({
        username: formState.username,
        password: formState.password
      })
        .then(res => {
          console.log(`Created User: "${res.data.username}"`)
          loginUser(res.data);
        })
        .catch(err => {
          if(err.response.data === 'Inuse') {
            let username = JSON.parse(err.config.data).username;
            console.log(`${err.message} - invalid Credentials: "${username}" already in use`);
            console.log(err.toJSON());
            setFormState((prevState) => {
              return { ...prevState, ['password'] : ''}
            });
          }
        });
    }
  };

  const loginUser = (data) => {
    API.userLogIn({
      username: data.username,
      password: formState.password
    })
      .then((res) => {
        console.log(`Logged in as: "${res.data.username}"`)
        console.log(res.data)
        auth.login(() => { history.push("/game") }, res.data)
      })
  };

  return (
    <div className="custom-border-lg" >

      <div className="container test">

        <div id="signUpPosition" className="Row justify-content-center d-flex">

          <div className="col-sm-10 customDivOne"> 

            <div className="customDivTwo">

              <div id="codaFont" className="form-group">
                <label id="customFont" htmlFor="username">Username</label>
                <input type="username" className="form-control" id="username" value={formState.username} onChange={handleInputChange} placeholder="user123" />
              </div>

              <div className="form-group">
                <label id="customFont" htmlFor="password">Password</label>
                <input type="password" className="form-control" value={formState.password} onChange={handleInputChange} id="password" />
              </div>
              <button
                className="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/");
                }}
              >
                Rules
              </button>
              <button 
                type="submit" 
                className="btn btn-info btn-block"
                onClick={handleSubmit}
                >
                  Register
              </button>
              <button
                className="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

}

export default SignUp;
// export default withRouter(SignUp);