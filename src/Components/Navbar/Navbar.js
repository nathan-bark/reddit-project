import "./Navbar.css";

import SignInRegisterButton from "../Buttons/SignInRegisterButton";
import logo from "../../assets/logo-no-background.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light justify-end ">
      <img src={logo} alt="logo" className="logo ml-0 mr-auto" />
      <div className="justify-end">
        <form className="form-inline mr-10">
          <input
            className="form-control mr-sm-2 rounded-full text-xl"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Link to="search">
            <button
              className="btn btn-outline-success my-2 my-sm-0 rounded-3xl srch-btn text-xl"
              type="submit"
            >
              Search
            </button>
          </Link>
        </form>
      </div>

      <SignInRegisterButton />
    </nav>
  );
};

export default NavBar;
