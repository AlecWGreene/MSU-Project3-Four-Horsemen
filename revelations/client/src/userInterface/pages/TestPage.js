import React, { Component } from 'react';
import LoginModalTest from '../components/Modal/LoginModalTest';
import Modal from '../components/Modal/index';
import "../styles/testPage.css";
import creep from "../assets/Tower_Base.png";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import blueBtn from "../assets/blueButton.png"

// import BlueBtn from "../assets/blueButton.png"


// export default function TestPage() {

    // handleFormSubmit = event => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();
    
    //     // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    //     alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    //     this.setState({
    //       firstName: "",
    //       lastName: ""
    //     });
    //   };


    // return (
    //     <div>
    //         <div className="test-borderOne">
    //            <div className="test-font">
    //                hello
    //            </div>
    //         </div>
    //     </div>

        /* <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="col-sm-1">
                <div className="blue-btn" onClick={this.handleFormSubmit}>
                Submit
                </div>
            </div>
            
        </Form>


        <form className="form">
          <input
            // value={this.state.firstName}
            name="firstName"
            // onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            // value={this.state.lastName}
            name="lastName"
            // onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        </> */
//     )
// }


class Form extends Component {
    // Setting the component's initial state
    state = {
      firstName: "",
      lastName: "",
      password: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
  
      if (name === "password") {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.firstName || !this.state.lastName) {
        alert("Fill out your first and last name please!");
      } else if (this.state.password.length < 6) {
        alert(
          `Choose a more secure password ${this.state.firstName} ${this.state
            .lastName}`
        );
      } else {
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      }
  
      this.setState({
        firstName: "",
        lastName: "",
        password: ""
      });
    };
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <>
        


        <div id="welcome-position" className="container">
            <div className="row justify-content-center">
                <div className="welcome-container col-md-6 neon">
                    <div className="welcome-content">
                        <button className="custom-btn aldrich-font">
                                RULES
                        </button>
                        <button className="custom-btn aldrich-font">
                            <Modal>
                            <LoginModalTest /> 
                            </Modal>
                        </button>
                        <button className="custom-btn aldrich-font">
                                PLAY AS GUEST
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
    }
  }
  
  export default Form;
