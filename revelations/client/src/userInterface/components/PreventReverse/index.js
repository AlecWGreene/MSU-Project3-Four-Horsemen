import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useAuth } from "../../components/UserAuth";

function PreventReverse({ children, ...rest }) {
    let { user } = useAuth();
    let gate = true;
    // auth.user.auth
    if(user.auth === null) {
        gate = true;
    }else{
        gate = false;
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          gate
          ? 
          (
            children

          ) 
          : 
          (
            <Redirect
              to={{
                pathname: "/game",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PreventReverse