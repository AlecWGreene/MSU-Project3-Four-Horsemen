import React from "react";
import { Router, Route, Switch} from "react-router-dom";
import UserAuth from "./userInterface/components/UserAuth/index"
import PrivateRoute from "./userInterface/components/PrivateRoute/index"
import PreventReverse from "./userInterface/components/PreventReverse/index";
import history from "./utils/history";
import Nav from "./userInterface/components/Nav";
import Wrapper from "./userInterface/components/Wrapper";
import Rules from "./userInterface/pages/Rules";
import SignUp from "./userInterface/pages/SignUp";
import LogIn from "./userInterface/pages/LogIn";
import GamePage from "./userInterface/pages/GamePage";
// import NoMatch from "./userInterface/pages/NoMatch";
import ContentWrapper from "./userInterface/components/Wrapper/ContentWrapper";
import GameContainer from "./userInterface/components/GameContainer/index"
import HomePage from "./userInterface/pages/HomePage";
import LoadingPage from "./userInterface/pages/LoadingPage"
import SoundSuite from "./userInterface/components/SoundSuite/index"


function App() {

  return (
    <UserAuth>
      <SoundSuite>

        <Router history={history}>

          <div>
            <Wrapper>

              <Switch>

              <PreventReverse path="/" exact>
                  <ContentWrapper>
                    <HomePage />
                  </ContentWrapper>
                </PreventReverse>

                <PreventReverse path="/rules">
                  <ContentWrapper>
                    <Rules />
                  </ContentWrapper>
                </PreventReverse>

                <PreventReverse path="/login">
                  <ContentWrapper>
                    <LogIn /> 
                  </ContentWrapper>
                </PreventReverse>

                <PreventReverse path="/signup">
                  <ContentWrapper>
                    <SignUp />
                  </ContentWrapper>
                </PreventReverse>

                <PrivateRoute path="/game">
                  <GamePage />
                </PrivateRoute>

                <PreventReverse path="/loading">
                  <LoadingPage />
                </PreventReverse>

              </Switch>

            </Wrapper>
          </div>

        </Router>

      </SoundSuite> 
    </UserAuth>
  );
}

export default App;