import React from "react";
import "../dist/css/Post.css";
import postImg from "../Images/post1.png";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="post">
      {post.photo ? (
        <img className="post__img" src={post.photo} alt="post_img" />
      ) : (
        <img className="post__img" src={postImg} alt="post_img" />
      )}
      <div className="post__info">
        <div className="post__info__ctgs">
          {post.categories.length > 0 ? (
            post.categories.map((category, idx) => (
              <span className="post__info__ctg" key={idx}>
                {category}
              </span>
            ))
          ) : (
            <span className="post__info__ctg">General</span>
          )}
        </div>
        <Link to={`/single/${post._id}`} className="link">
          <span className="post__info__title">{post.title}</span>
        </Link>
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
