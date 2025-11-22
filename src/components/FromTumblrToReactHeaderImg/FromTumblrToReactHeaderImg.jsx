import React from "react";
import "./FromTumblrToReactHeaderImg.css";

function FromTumblrToReactHeaderImg() {
  return (
    <div className="FromTumblrToReactHeaderImgDiv">
      <a
        href="https://github.com/jonathanschimpf/Tumblr-To-React"
        target="_blank"
        rel="noreferrer"
        className="FromTumblrToReactHeaderImgLink"
      >
        <img
          src="/images/FromTumblrToReact_v2.jpg"
          alt="Header Visual Representation"
          className="FromTumblrToReactHeaderImg FromTumblrToReactHeaderImg--base"
        />
        <img
          src="/images/FromTumblrToReact-VITE-2025-and-beyond.jpg"
          alt=""
          aria-hidden="true"
          className="FromTumblrToReactHeaderImg FromTumblrToReactHeaderImg--hover"
        />
      </a>
    </div>
  );
}

export default FromTumblrToReactHeaderImg;
