import "./Navbar.css";

import SignInRegisterButton from "../Buttons/SignInRegisterButton";
import logo from "../../assets/logo-no-background.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchTerm } from "../features/searchSubredditsSlice";
import { updateDetails } from "../features/subredditDetailsSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchSubreddit.searchTerm)
  const displayName = useSelector(state => state.subredditDetails.displayName)  

  const redditFetch = () =>{
    fetch(`https://www.reddit.com/subreddits/search.json?q=${searchTerm}&limit=10&show=all`)
    .then(response => response.json())
    .then(data => dispatch(updateDetails(data.data.children[0].data)))
    console.log(displayName)
    ;
  }

  const searchChange = (e) => {
    dispatch(updateSearchTerm(e.target.value))
  }

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
            value={searchTerm}
            onChange={searchChange}
          />
          <Link to="search">
            <button
              className="btn btn-outline-success my-2 my-sm-0 rounded-3xl srch-btn text-xl"
              type="submit"
              onClick={redditFetch}
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
