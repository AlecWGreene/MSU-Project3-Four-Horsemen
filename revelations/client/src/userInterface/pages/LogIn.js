import React, { useState, useEffect } from "react";
import { useAuth } from "../components/UserAuth";
import API from "../../utils/API";
import history from "../../utils/history";
import Modal from 'react-bootstrap/Modal';
import "../styles/logIn.css";

function LogIn(props) {
  let auth = useAuth();
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });
  const handleInputChange = event => {
    event.preventDefault();
    const id = event.currentTarget.id;
    const value = event.target.value.trim();
    setFormState((prevState) => {
      return { ...prevState, [id] : value}
    });
  };

  // const handleKeyDown = event => {
  //   event.preventDefault();
  //   if (event.key === 'Enter') {
  //     handleSubmit(event);
  //   };
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.username !== "" && formState.password !== "") {
      API.userLogIn({
        username: formState.username,
        password: formState.password
      })
        .then((res) => {
          console.log(res.data)
          auth.login(() => { history.push("/game") }, res.data)
        })
        .catch(err => {
          console.log(err);
          // console.log(err.toJSON());
          // Need to come up with login error handling
          setFormState((prevState) => {
            return { ...prevState, ['password'] : ''}
          });
        });
    }
  }

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Body>
        <div className="custom-padding">
          <div id="codaFont" className="form-group">
            <label id="customFont" htmlFor="username">Username</label>
            <input type="username" className="form-control" id="username" value={formState.username} onChange={handleInputChange} placeholder="user123" />
          </div>
          <div className="form-group">
            <label id="customFont" htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" value={formState.password} onChange={handleInputChange} />
          </div>
          <button 
            type="submit" 
            className="custom-modal-btn aldrich-font" 
            onClick={handleSubmit}
            >
              LOGIN
          </button>
        </div>
      </Modal.Body>
    </Modal>
    
  );
}

export default LogIn;