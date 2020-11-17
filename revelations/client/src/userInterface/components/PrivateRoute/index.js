import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useAuth } from "../../components/UserAuth";

function PrivateRoute({ children, ...rest }) {
    const { user } = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          // auth.user.auth 
          user.auth
          ? (

            children

          ) 
          : 
          (

            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
            
          )
        }
      />
    );
  }

export default PrivateRoute

