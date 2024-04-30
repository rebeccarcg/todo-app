import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">To Do</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
