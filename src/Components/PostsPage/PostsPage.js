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

  const image = useSelector((state) => {
    return state.subredditDetails.selectedSubImg
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
            image={image ? image : 'https://static.vecteezy.com/system/resources/previews/008/385/783/original/reddit-social-media-design-icon-symbol-logo-illustration-free-vector.jpg'}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
