import React, {useContext, useState, useEffect} from "react";
import Toast from 'react-bootstrap/Toast';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./style.css";
import { useAuth } from "../UserAuth";
import { GameStateContext } from "../../pages/GamePage.js";


function ToastUser(props) {
    const auth = useAuth();
    const [state, dispatch] = useContext(GameStateContext);
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        if(props.message !== "") setShow(true)
    }, [props.message]) // not sure what to use as dependency, my gut says go with empty or something in the dispatch

    return (
                <Toast style={{ marginLeft: "30%", marginRight: "auto", position: "absolute"}} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body className={"toast-div aldrich-font"}>{props.message}</Toast.Body>
                </Toast>
    );
}
  
export default ToastUser;