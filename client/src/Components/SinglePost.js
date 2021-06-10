import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../dist/css/SinglePost.css";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import singlepostImg from "../Images/singlepost.png";
import axios from "axios";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  console.log(post);

  return (
    <div className="singlepost">
      <div className="singlepost__wrap">
        {post.photo ? (
          <img src={post.photo} alt="single_img" className="singlepost__img" />
        ) : (
          <img
            src={singlepostImg}
            alt="single_img"
            className="singlepost__img"
          />
        )}
        <h1 className="singlepost__title">
          {post.title}
          <div className="singlepost__title__edit">
            <MdEdit className="singlepost__title__icon" />
            <MdDeleteForever className="singlepost__title__icon" />
          </div>
        </h1>
        <div className="singlepost__info">
          <span className="singlepost__info__author">
            Author: &nbsp;
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlepost__info__date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlepost__info__content">{post.desc}</p>
      </div>
    </div>
  );
}

export default SinglePost;
