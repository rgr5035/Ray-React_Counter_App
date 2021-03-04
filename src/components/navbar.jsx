import React from "react";


//stateless functional component
const Navbar = ({totalCounters}) => {
  console.log('Navbar rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="baadge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
}


export default Navbar;
