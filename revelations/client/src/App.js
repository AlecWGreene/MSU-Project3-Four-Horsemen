import React, { useContext, createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory, useLocation} from "react-router-dom";
import API from "./utils/API";
import Rules from "./userInterface/pages/Rules";
import SignUp from "./userInterface/pages/SignUp";
import LogIn from "./userInterface/pages/LogIn";
import GamePage from "./userInterface/pages/GamePage";
import NoMatch from "./userInterface/pages/NoMatch";
import Nav from "./userInterface/components/Nav";
import Wrapper from "./userInterface/components/Wrapper";
import ContentWrapper from "./userInterface/components/Wrapper/ContentWrapper";
import GameContainer from "./userInterface/components/GameContainer/index";
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function App() {
  return (
    <ProvideAuth>

      <Router history={history}>
        <div>
          <Nav />
          <Wrapper>
            <Switch>
              <LandingRoute exact path={["/","/rules"]}>
                <ContentWrapper>
                  <Rules />
                </ContentWrapper>
              </LandingRoute>
              <LandingRoute exact path="/signup">
                <ContentWrapper>
                  <SignUp />
                </ContentWrapper>
              </LandingRoute>
              <LandingRoute exact path="/login">
                <ContentWrapper>
                  <LogIn />
                </ContentWrapper>
              </LandingRoute>
              {/* <GuestRoute exact path="/game">
                <GameContainer>
                  <GamePage />
                </GameContainer>
              </GuestRoute> */}
              <PrivateRoute exact path="/game">
                <GameContainer>
                  <GamePage />
                </GameContainer>
              </PrivateRoute>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </Wrapper>
        </div>
      </Router>

    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
  signinGuest(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
};

// create new context instance of authContext to keep track of user login status
const authContext = createContext();

function ProvideAuth({ children }) {
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

// context provider state and methods
function useProvideAuth() {
  const [user, setUser] = useState(null);

//  useEffect(() => {
//   // let auth = useAuth();

//   // make an api call that will request the active user
//   // if the user is not found, set state to guest.

//   API.userLogIn({
//     username: "",
//     password: ""
//   })
//     .then((req) => {
//       console.log(req.data)
//       const userStatus = req.data ? setUser("user") : setUser("guest");
//       setUser(userStatus);
//     })

//  },[])

  // log the user in and set user state to "user" as method of authentication
  const login = cb => {
    return fakeAuth.login(() => {
      setUser("user");
      cb();
    });
  };

  // log the user out and set user state to null indicating lack of authentication
  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  // log the user in as a guest and set user state to guest
  const signinGuest = cb => {
    return fakeAuth.signinGuest(() => {
      setUser("guest");
      cb();
    });
  };

  return { user, login, signout, signinGuest };
};

// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user === "user" ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// function SaveBtn() {
//   let auth = useAuth();

//   return auth.user ? (
//     <Button>save</Button>
//   ) : (
//     <Example />
//   );
// }

// function Example() {
//   let auth = useAuth();
//   let history = useHistory();
//   const [showA, setShowA] = useState(false);
//   const toggleShowA = () => setShowA(!showA);
  
//   return (
//     <Row>
//       <Col 
//         xs={6}
//         aria-live="polite"
//         aria-atomic="true"
//         style={{
//           position: 'relative',
//           minHeight: '100px',
//         }} 
//       >
//         <Toast 
//           show={showA} 
//           onClose={toggleShowA}
//           style={{
//             position: 'absolute',
//             top: 0,
//             right: 0,
//           }}
//         >
//           <Toast.Header>
//             <strong className="mr-auto">Login/Sign up to save</strong>
//           </Toast.Header>
//           <Toast.Body>
//             <Link 
//               onClick={() => {
//                 auth.login(() => history.push("/game"));
//               }}
//               to="/login"
//             >
//               Login
//             </Link>
//             <Link 
//               onClick={() => {
//                 auth.signout(() => history.push("/game"));
//               }}
//               to="/signup"
//             >
//               Sign up
//             </Link>
//           </Toast.Body>
//         </Toast>
//       </Col>
//       <Col xs={6}>
//         <Button onClick={toggleShowA}>
//           save
//         </Button>
//       </Col>
//     </Row>
//   );
// }

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
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

function LandingRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <Redirect
            to={{
              pathname: "/game",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

// function Rules() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.login(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );

// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.login(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );

// }

export default App;
