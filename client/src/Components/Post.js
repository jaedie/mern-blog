import React from "react";
import "../dist/css/Post.css";
import postImg from "../Images/post1.png";

function Post({ post }) {
  return (
    <div className="post">
      <img className="post__img" src={postImg} alt="post_img" />
      <div className="post__info">
        <div className="post__info__ctgs">
          <span className="post__info__ctg">Life</span>
          <span className="post__info__ctg">Coding</span>
        </div>
        <span className="post__info__title">{post.title}</span>
        <hr />
        <span className="post__info__date">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="post__info__des">{post.desc}</p>
      </div>
    </div>
  );
}

export default Post;
