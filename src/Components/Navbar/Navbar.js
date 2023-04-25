import "./Navbar.css";

import SignInRegisterButton from "../Buttons/SignInRegisterButton";
import logo from '../../assets/logo-no-background.png'

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-options">
          <input type="text" placeholder="Search" className="searchbar" />
          <SignInRegisterButton />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
