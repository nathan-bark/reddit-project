import SubRedditCard from "../SubRedditCards/SubRedditCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './SearchPage.css'

const SearchPage = () => {
  const { searchTerm, searchClicked } = useSelector(
    (state) => state.searchSubreddit
  );
  const subreddits = useSelector((state) => {
    console.log(state.subredditDetails.subArray);
    if (
      state.subredditDetails.subArray &&
      state.subredditDetails.subArray.length > 0
    ) {
      //check if initialised and length
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
  return (
    <div className="search-page">
      <h1 className=" text-6xl mb-10">
        {" "}
        {searchTerm && searchClicked
          ? `Results for ${searchTerm}`
          : "Search for Subreddits"}
      </h1>
      <div className="card-container">
      {subreddits.map((subreddit) => (
          <Link key={subreddit.display_name} to="/posts">
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
