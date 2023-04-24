import "./Navbar.css";

import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img src="" alt="logo" className="logo" />
        <input type="text" placeholder="Search" className="searchbar" />
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: "#666BB5" }}
        >
          Sign Up / Register
        </Button>
      </nav>
    </div>
  );
};

export default NavBar;
