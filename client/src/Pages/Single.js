import React from "react";
import Sidebar from "../Components/Sidebar";
import SinglePost from "../Components/SinglePost";
import "../dist/css/Single.css";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
