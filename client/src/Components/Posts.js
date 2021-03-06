import React from "react";
import "../dist/css/Posts.css";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, idx) => (
        <Post post={post} key={idx} />
      ))}
    </div>
  );
}

export default Posts;
