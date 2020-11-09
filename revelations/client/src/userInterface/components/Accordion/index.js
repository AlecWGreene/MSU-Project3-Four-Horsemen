import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './style.css';

function settingsOptions() {
    return (
        <Accordion>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="danger" eventKey="0">
                Change Username
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="danger" eventKey="1">
                Change Password
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="danger" eventKey="2">
                Change Email
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    );
}

export default settingsOptions;