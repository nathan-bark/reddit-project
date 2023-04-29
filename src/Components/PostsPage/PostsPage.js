import PostCard from '../PostCard/PostCard';
import './PostPage.css'

const PostsPage = () => {
  return (
    <div className="post-container">
      <div className="post-card">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      </div>
    </div>
    
    
  )
};

export default PostsPage;
