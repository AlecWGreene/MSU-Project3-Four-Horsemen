import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Sign-up
      </a>
      |
      <a className="navbar-brand" href="/login">
        login
      </a>
      |
      <a className="navbar-brand" href="/game">
        guest
      </a>
    </nav>
  );
}

export default Nav;
