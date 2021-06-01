import React from "react";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import Sidebar from "../Components/Sidebar";
import "../dist/css/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
