import SubRedditCard from "../SubRedditCards/SubRedditCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SearchPage.css";
import { useDispatch } from "react-redux";
import { updateSelectedName, updatePosts, updateSelectedImg } from "../features/subredditDetailsSlice";
const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm, searchClicked } = useSelector(
    (state) => state.searchSubreddit
  );
  // const selectedName = useSelector(state => state.subredditDetails.selectedSubName)
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
  const fetchName = (name, image) => {
    dispatch(updateSelectedName(name));
    dispatch(updateSelectedImg(image))
    fetch(`https://www.reddit.com/${name}/new.json`)
    .then(response => response.json())
    .then(data => dispatch(updatePosts(data.data.children)))
    
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
            onClick={() => fetchName(subreddit.display_name, subreddit.image)}
      
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
