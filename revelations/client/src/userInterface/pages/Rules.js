// import React, { useState, useEffect} from "react";
// import { BrowserRouter as Router, Route, withRouter, Switch, Link, Redirect, useHistory, useLocation} from "react-router-dom";
// import { useAuth } from "../../App";
import React from "react";
import { useAuth } from "../components/UserAuth";
import history from "../../utils/history";

// import "../styles/logIn.css"

// function Rules() {
    // console.log(props);
    // // access context provider state and methods
    // let auth = useAuth()

    // // if user is logged in, do not let them come back to landing page unless they log out
    //  useEffect(() => {
    //   if(auth.user === "guest" || auth.user === "user"){
    //     props.history.push("/game");
    //   }
    // },[])

    // function handleGuest(event) {
    //     event.preventDefault()
    //     auth.signinGuest(() => {
    //         // return(
    //         //   // auth.redirect("/game")
    //         //   <Route>
    //         //     <Redirect from='/rules' to={{ pathname: "/game" }} />
    //         //   </Route>
    //         // )
    //       // return(
    //       //   <Route
    //       //     render={({ location }) => (
    //       //         <Redirect
    //       //           to={{
    //       //             pathname: "/game",
    //       //             state: { from: location }
    //       //           }}
    //       //         />
    //       //       )}
    //       //   />
    //       // ) 
    //         props.history.push("/game");
    //     })
    //     // auth.signinGuest().then(window.location.replace("/game"))
    //     // window.location.replace("/game")
    // }

    // function handleLogin(event) {
    //   event.preventDefault()
    //   props.history.push("/login");
    //   // return(
    //   //   <Redirect from='/rules' to={{ pathname: "/login" }} />
    //   // );
    //   // loginRoute();
    // }

    // function handleSignUp(event) {
    //     event.preventDefault()
    //     props.history.push("/signup");
    // }
function Rules() {

  let auth = useAuth()

  const userAuthState = () => {
      auth.signinGuest(() => { history.push("/game") })
  };
  return (
    <div className="custom-border-lg">
      <h1>Current: Rules page</h1>
      <div id="logInPosition" className="container">
        <div className="Row justify-content-center d-flex">
          <div className="col-md-6 customDivOne"> 
            <div className="customDivTwo">
              
              <div className="form-group">
                    <label id="customFont" for="password">Rules</label>
                    <div id="lipsum">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Nulla nec elit ac orci finibus porta.</li>
                            <li>Pellentesque pellentesque erat id massa ornare, nec sollicitudin felis hendrerit.</li>
                            <li>Vestibulum eget risus vel diam semper egestas sit amet sed felis.</li>
                            <li>Vivamus dictum elit non erat ultricies, blandit tempor urna sodales.</li>
                            <li>Ut dignissim ligula sed leo finibus, a volutpat sapien pellentesque.</li>
                        </ul>
                    </div>
              </div>

              <button
                className="btn btn-info btn-block"
                type="button"
                onClick={() => {
                    history.push("/login");
                }}
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

              <button
                  className="btn btn-info btn-block"
                  type="button"
                  onClick={userAuthState}
              >
                  Guest
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules
// export default withRouter(Rules);