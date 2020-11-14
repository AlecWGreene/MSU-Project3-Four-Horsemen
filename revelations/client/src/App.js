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
import TestPage from "./userInterface/pages/TestPage";


function App() {

  return (
    <UserAuth>

      <Router history={history}>

        <div>
          <Wrapper>

            <Switch>

              <PreventReverse path={["/","/rules"]} exact>
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

              <PreventReverse>
                <ContentWrapper path="/test">
                  <TestPage />
                </ContentWrapper>
              </PreventReverse>

              {/* <Route>
                <NoMatch />
              </Route> */}

            </Switch>

          </Wrapper>
        </div>

      </Router>
       
    </UserAuth>
  );
}

export default App;