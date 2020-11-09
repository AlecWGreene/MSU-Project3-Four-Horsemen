import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./userInterface/pages/SignUp";
import LogIn from "./userInterface/pages/LogIn";
import GamePage from "./userInterface/pages/GamePage";
import NoMatch from "./userInterface/pages/NoMatch";
import Nav from "./userInterface/components/Nav";
import Wrapper from "./userInterface/components/Wrapper";
// import Footer from "./userInterface/components/Footer";
// import SignInBox from "./userInterface/components/SignInBox";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/signup"]}>
              <SignUp />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/game">
              <GamePage />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
