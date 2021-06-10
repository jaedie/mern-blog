import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import Sidebar from "../Components/Sidebar";
import "../dist/css/Home.css";
import axios from "axios";
import { useLocation } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts/" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
