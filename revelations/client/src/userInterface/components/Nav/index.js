import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-static-top navbar-dark bg-danger">
      <a className="navbar-brand text-dark" href="/">
        Sign-up
      </a>
      
      <a className="navbar-brand text-dark" href="/login">
        Login
      </a>
      
      <a className="navbar-brand text-dark" href="/game">
        Play
      </a>
    </nav>


// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //   <Navbar.Collapse id="responsive-navbar-nav">
  //     <Nav className="mr-auto">
  //       <Nav.Link href="#features">Features</Nav.Link>
  //       <Nav.Link href="#pricing">Pricing</Nav.Link>
  //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //         <NavDropdown.Divider />
  //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  //       </NavDropdown>
  //     </Nav>
  //     <Nav>
  //       <Nav.Link href="#deets">More deets</Nav.Link>
  //       <Nav.Link eventKey={2} href="#memes">
  //         Dank memes
  //       </Nav.Link>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>

  );
}

export default Nav;
