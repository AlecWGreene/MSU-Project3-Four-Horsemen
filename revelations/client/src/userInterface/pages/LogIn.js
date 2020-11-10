import React, { useState, useEffect} from "react";
import API from "../../utils/API";
import "../styles/logIn.css"

function LogIn() {
  // useEffect(() => {
  //   setEmployeesState(props.apiData);
  // }, [props.apiData]);

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
    if (formState.username !== "" && formState.password !== "") {
      API.userLogIn({
        username: formState.username,
        password: formState.password
      })
        .then((req) => {
          console.log(req.data)
          const route = req.data ? "/game" : "/login";
          window.location.replace(route)
        })
        .then(() => setFormState({
          username: "",
          password: ""
        }))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="custom-border-lg">
      <h1>Current: Login page</h1>
      <div id="logInPosition" className="container">
        <div className="Row justify-content-center d-flex">
          <div className="col-md-6 customDivOne"> 
            <div className="customDivTwo">
              <div id="codaFont" className="form-group">
                <label id="customFont" for="username">Username</label>
                <input type="username" className="form-control" id="username" value={formState.username} onChange={handleInputChange} placeholder="user123" />
              </div>
              <div className="form-group">
                <label id="customFont" for="password">Password</label>
                <input type="password" className="form-control" id="password" value={formState.password} onChange={handleInputChange} />
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

export default LogIn;