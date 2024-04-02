import React from "react";
import Post from "../Post";


 
export default function Index() {
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    );
};

