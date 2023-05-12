import SubRedditCard from "../SubRedditCards/SubRedditCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SearchPage.css";
import { useDispatch } from "react-redux";
import { updateSelectedName } from "../features/subredditDetailsSlice";
const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm, searchClicked } = useSelector(
    (state) => state.searchSubreddit
  );
  const subreddits = useSelector((state) => {
    if (
      //check if initialised and length
      state.subredditDetails.subArray &&
      state.subredditDetails.subArray.length > 0
    ) {
      //extract required data
      return state.subredditDetails.subArray.map((subreddit) => {
        return {
          display_name: subreddit.data.display_name_prefixed,
          description: subreddit.data.public_description,
          image: subreddit.data.header_img,
        };
      });
    } else {
      return [];
    }
  });
  const fetchName = (name) => {
    dispatch(updateSelectedName(name));
    
  };

  return (
    <div className="search-page">
      <h1 className=" text-6xl mb-10">
        {" "}
        {searchTerm && searchClicked
          ? `Results for ${searchTerm}`
          : "Search for Subreddits"}
      </h1>
      <div className="card-container">
        {/* map one card for each subrerddit in state array*/}
        {subreddits.map((subreddit) => (
          <Link
            key={subreddit.display_name}
            to="/posts"
            onClick={() => fetchName(subreddit.display_name)}
          >
            <SubRedditCard
              display_name={subreddit.display_name}
              description={subreddit.description}
              image={subreddit.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
