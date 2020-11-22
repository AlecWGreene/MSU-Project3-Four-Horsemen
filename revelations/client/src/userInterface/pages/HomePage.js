import React from 'react';
import SignUpModal from '../components/SignUpModal';
import LogInModal from '../components/LogInModal';
import Rules from '../components/Rules';
import { useAuth } from "../components/UserAuth";
import history from "../../utils/history";
import "../styles/HomePage.css";

export default function TestPage() {

  let auth = useAuth()

  const userAuthState = () => {
    auth.signinGuest(() => { history.push("/game") })
  };

return (
  <>

  <div id="welcome-position" className="container">
      <div className="row justify-content-center d-flex">
          <div className="welcome-container col-md-6 neon">
              <div className="welcome-content">
                  <button className="custom-btn aldrich-font">
                    <Rules />
                  </button>
                  <button className="custom-btn aldrich-font">
                    <LogInModal />
                  </button>
                  <button className="custom-btn aldrich-font">
                    <SignUpModal />
                  </button>
                  <button
                   className="custom-btn aldrich-font" 
                   type="button"
                   onClick={userAuthState}
                  >
                    <div className="homepage-btns">
                      PLAY AS GUEST
                    </div>
                    
                  </button>
              </div>
          </div>
      </div>
  </div>
  </>

)
}



// class Form extends Component {
//     // Setting the component's initial state
//     state = {
//       firstName: "",
//       lastName: "",
//       password: ""
//     };
  
//     handleInputChange = event => {
//       // Getting the value and name of the input which triggered the change
//       let value = event.target.value;
//       const name = event.target.name;
  
//       if (name === "password") {
//         value = value.substring(0, 15);
//       }
//       // Updating the input's state
//       this.setState({
//         [name]: value
//       });
//     };
  
//     handleFormSubmit = event => {
//       // Preventing the default behavior of the form submit (which is to refresh the page)
//       event.preventDefault();
//       if (!this.state.firstName || !this.state.lastName) {
//         alert("Fill out your first and last name please!");
//       } else if (this.state.password.length < 6) {
//         alert(
//           `Choose a more secure password ${this.state.firstName} ${this.state
//             .lastName}`
//         );
//       } else {
//         alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//       }
  
//       this.setState({
//         firstName: "",
//         lastName: "",
//         password: ""
//       });
//     };
  
//     render() {
//       // Notice how each input has a `value`, `name`, and `onChange` prop
//       return (
//         <>
        


//         <div id="welcome-position" className="container">
//             <div className="row justify-content-center">
//                 <div className="welcome-container col-md-6 neon">
//                     <div className="welcome-content">
//                         <button className="custom-btn aldrich-font">
//                                 RULES
//                         </button>
//                         <button className="custom-btn aldrich-font">
//                             <Modal>
//                             <settingsModal />
//                             </Modal>
//                         </button>
//                         <button className="custom-btn aldrich-font">
//                                 PLAY AS GUEST
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//       );
//     }
//   }
  
//   export default Form;
