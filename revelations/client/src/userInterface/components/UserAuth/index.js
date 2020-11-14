import React, { useContext, createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory, useLocation} from "react-router-dom";
import history from "../../../utils/history";

// create new context instance of authContext to keep track of user login status
const authContext = createContext();

const fakeAuth = {
    isAuthenticated: false,
    login(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    logout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
    signinGuest(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
};

// context provider state and methods
function useProvideAuth() {

  useEffect(()=>{
    const userReloadState = JSON.parse(localStorage.getItem('user'));
    if(userReloadState) {
      setUserState(userReloadState);
    }
  },[]);

  const [user, setUserState] = useState({
    auth: null,
    data: null
  });

  // log the user in and set user.auth state to "user" as method of authentication
  const login = (cb, data) => {
    return fakeAuth.login(() => {
      const state = {
        auth: "user",
        data: data
      };
      localStorage.setItem('user', JSON.stringify(state));
      // setUser("user");
      setUserState(state);
      cb();
    });
  };

  // log the user out and set user.auth state to null indicating lack of authentication
  const logout = cb => {
    return fakeAuth.logout(() => {
      const state = {
        auth: null,
        data: null
      };
      localStorage.removeItem('user');
      // setUser(null);
      setUserState(state);
      cb();
    });
  };

  // log the user in as a guest and set user.auth state to guest
  const signinGuest = cb => {
    return fakeAuth.signinGuest(() => {
      const state = {
        auth: "guest",
        data: null
      };
      // localStorage.setItem('auth', 'guest');
      localStorage.setItem('user', JSON.stringify(state));
      // setUser("guest");
      setUserState(state);
      cb();
    });
  };

  return { user, login, logout, signinGuest };
};

function UserAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
}

// access context provider state and methods
export function useAuth() {
  return useContext(authContext);
}

export default UserAuth