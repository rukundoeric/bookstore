import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between">
        <div className="d-flex left justify-content-center align-items-center">
          <h6>BookStore CMS</h6>
        </div>
        <div className="d-flex right justify-content-center align-items-center">
          <span className="d-flex justify-content-center align-items-center"><i className="fas fa-user" /></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
