import React, { useState, useEffect } from "react";
import { useAuth } from "../components/UserAuth";
import API from "../../utils/API";
import history from "../../utils/history";
// import { BrowserRouter as Router, Route, withRouter, Switch, Link, Redirect, useHistory, useLocation} from "react-router-dom";
import "../styles/logIn.css"

// function LogIn(props) {
//   // useEffect(() => {
//   //   setEmployeesState(props.apiData);
//   // }, [props.apiData]);
//   let auth = useAuth();

//   // if user is logged in, do not let them come back to landing page routes unless they log out
//   useEffect(() => {
//     if(auth.user === "guest" || auth.user === "user"){
//       props.history.push("/game");
//     }
//   },[])
  
//   const [formState, setFormState] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleInputChange = event => {
//     event.preventDefault();
//     const id = event.currentTarget.id;
//     const value = event.target.value.trim();
//     setFormState((prevState) => {
//       return { ...prevState, [id] : value}
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (formState.username !== "" && formState.password !== "") {
//       API.userLogIn({
//         username: formState.username,
//         password: formState.password
//       })
//         .then((req) => {
//           console.log(req.data)
//           const route = req.data ? "/game" : "/login";
//           window.location.replace(route)
//         })
//         .then(() => setFormState({
//           username: "",
//           password: ""
//         }))
//         .catch(err => console.log(err));
//     }
//   };

function LogIn() {
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

  const handleKeyDown = event => {
    event.preventDefault();
    if (event.key === 'Enter') {
      handleSubmit(event);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.username !== "" && formState.password !== "") {
      API.userLogIn({
        username: formState.username,
        password: formState.password
      })
        .then((res) => {
          console.log(res.data)
          auth.login(() => { history.push("/game") }, res.data)
        })
        .catch(err => {
          console.log(err);
          // console.log(err.toJSON());
          // Need to come up with login error handling
          setFormState((prevState) => {
            return { ...prevState, ['password'] : ''}
          });
        });
    }
  }

  return (
    <div className="custom-border-lg">
      <h1>Current: Login page</h1>
      <div id="logInPosition" className="container">
        <div className="Row justify-content-center d-flex">
          <div className="col-md-6 customDivOne"> 
            <div className="customDivTwo">
              <div id="codaFont" className="form-group">
                <label id="customFont" for="username">Username</label>
                <input type="username" className="form-control" id="username" value={formState.username} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="user123" />
              </div>
              <div className="form-group">
                <label id="customFont" for="password">Password</label>
                <input type="password" className="form-control" id="password" value={formState.password} onChange={handleInputChange} onKeyDown={handleKeyDown} />
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
                  Login
              </button>
              <button
                className="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
// export default withRouter(LogIn);