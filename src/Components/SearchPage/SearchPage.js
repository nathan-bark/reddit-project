import SubRedditCard from "../SubRedditCards/SubRedditCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const SearchPage = () => {
  const { searchTerm, searchClicked} = useSelector(state => state.searchSubreddit)
  

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen ">
        <h1 className=" text-6xl mb-10"> {searchTerm && searchClicked ? `Results for ${searchTerm}` : 'Search for Subreddits'}</h1>
      <div className=" min-w-0 max-w-screen-lg p-20 bg-darker rounded-3xl flex  justify-center">
        
        <Link to='posts'>
          <SubRedditCard />
        </Link>
        <Link to='posts'>
          <SubRedditCard />
        </Link>
        <Link to='posts'>
          <SubRedditCard />
        </Link>
        <Link to='posts'>
          <SubRedditCard />
        </Link>

      </div>
    </div>
  );
};

export default SearchPage;
