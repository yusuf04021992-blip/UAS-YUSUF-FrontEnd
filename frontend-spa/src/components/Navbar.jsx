import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary shadow-sm mb-4">
      <div className="container">
        <span className="navbar-brand fw-bold">
          <i className="bi bi-mortarboard-fill me-2"></i>
          SiswaPro Dashboard
        </span>
      </div>
    </nav>
  );
};

export default Navbar;