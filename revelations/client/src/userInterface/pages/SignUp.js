import React, { useState, useEffect } from "react";
import { useAuth } from "../components/UserAuth";
import API from "../../utils/API";
import history from "../../utils/history";
import Modal from "react-bootstrap/esm/Modal";

function SignUp(props) {
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

  const handleSubmit = event => {
    event.preventDefault();
    if (formState.username !== "" && formState.password !== "") {
      API.userSignUp({
        username: formState.username,
        password: formState.password
      })
        .then(res => {
          console.log(`Created User: "${res.data.username}"`)
          loginUser(res.data);
        })
        .catch(err => {
          if(err.response.data === 'Inuse') {
            let username = JSON.parse(err.config.data).username;
            console.log(`${err.message} - invalid Credentials: "${username}" already in use`);
            // console.log(err.toJSON());
            setFormState((prevState) => {
              return { ...prevState, ['password'] : ''}
            });
          }
        });
    }
  };

  const loginUser = (data) => {
    API.userLogIn({
      username: data.username,
      password: formState.password
    })
      .then((res) => {
        console.log(`Logged in as: "${res.data.username}"`)
        console.log(res.data)
        auth.login(() => { history.push("/game") }, res.data)
      })
  };

  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <div className="custom-padding text-center">
          <div id="codaFont" className="form-group">
            <label id="customFont" htmlFor="username">USERNAME</label>
            <input type="username" className="form-control" id="username" value={formState.username} onChange={handleInputChange} placeholder="user123" />
          </div>
          <div className="form-group text-center">
            <label id="customFont" htmlFor="password">PASSWORD</label>
            <input type="password" className="form-control" value={formState.password} onChange={handleInputChange} id="password" />
          </div>
          <button 
            type="submit" 
            className="custom-modal-btn aldrich-font" 
            onClick={handleSubmit}
            >
              REGISTER
          </button>
        </div>
      </Modal.Body>
    </Modal>
    
    
  );

}

export default SignUp;
// export default withRouter(SignUp);