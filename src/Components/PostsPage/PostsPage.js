import { useSelector } from "react-redux";
import PostCard from "../PostCard/PostCard";
import "./PostPage.css";

const PostsPage = () => {
  const posts = useSelector((state) => {
    if (
      state.subredditDetails.subPosts &&
      state.subredditDetails.subPosts.length > 0
    ) {
      return state.subredditDetails.subPosts.map((subreddit) => ({
        postTitle: subreddit.data.title,
        author: subreddit.data.author,
        postContent: subreddit.data.selftext,
      }));
    } else {
      return [];
    }
  });
  return (
    <div className="post-container">
      <div className="post-card">
        {posts.map((post) => (
          <PostCard
            key={post.postTitle}
            title={post.postTitle}
            author={post.author}
            content={post.postContent}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
