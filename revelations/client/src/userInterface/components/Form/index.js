import React from 'react';
import Form from 'react-bootstrap/Form';

export default function UserForm() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="perfect-dark">Email Address</Form.Label>
                <Form.Control className="aldrich-font text-center" type="email" placeholder="URNAME@EMAIL.COM" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="perfect-dark">Password</Form.Label>
                <Form.Control className="aldrich-font text-center" type="password" placeholder="*********" />
            </Form.Group>
            <button className="custom-btn aldrich-font">
                SUBMIT
            </button>
        </Form>
    )
}