import React from "react";
import { useAuth } from "../components/UserAuth";
import history from "../../utils/history";

function Rules(props) {

  let auth = useAuth()

  const userAuthState = () => {
      auth.signinGuest(() => { history.push("/game") })
  };
  return (
    <div className="custom-border-lg">
      <div  className="container">
        <div className="Row justify-content-center d-flex">
          <div className="col-md-6"> 
            <div className="form-group">
                    <label id="customFont" htmlFor="rules">Rules</label>
                    <div id="lipsum" className="text-center">
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
  );
}

export default Rules