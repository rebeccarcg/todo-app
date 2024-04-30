import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">ToDo</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
