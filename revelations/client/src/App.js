import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./userInterface/pages/SignUp";
import LogIn from "./userInterface/pages/LogIn";
import GamePage from "./userInterface/pages/GamePage";
import NoMatch from "./userInterface/pages/NoMatch";
import Nav from "./userInterface/components/Nav";
import Wrapper from "./userInterface/components/Wrapper";
import ContentWrapper from "./userInterface/components/Wrapper/ContentWrapper";
import GameContainer from "./userInterface/components/GameContainer/index"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Switch>
            <Route exact path={["/", "/signup"]}>
              <ContentWrapper>
                <SignUp />
              </ContentWrapper>
            </Route>
            <Route exact path="/login">
              <ContentWrapper>
                <LogIn />  
              </ContentWrapper>
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
