import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-5 bg-blue-700 justify-center place-content-evenly">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/pastes">Paste</NavLink>
    </div>
  );
};

export default Navbar;