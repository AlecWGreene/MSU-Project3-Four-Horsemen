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
  );
}

export default Nav;
