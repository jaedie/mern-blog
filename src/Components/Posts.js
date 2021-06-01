import React from "react";
import "../dist/css/Posts.css";
import Post from "./Post";

function Posts() {
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
