import React, { useState } from "react";
import "./HoverStrangeObservationsReveal.css";

const HoverStrangeObservationsReveal = () => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered((prev) => !prev);

  const handleEnter = () => setHovered(true);
  const handleLeave = () => setHovered(false);
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleHover();
    }
  };

  return (
    <div className="hover-wrapper">
      <div
        className="hover-inner"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={toggleHover}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}
        aria-pressed={hovered}
      >
        <p className={`hover-name ${hovered ? "fade-out" : "fade-in"}`}>
          Jonathan Schimpf
        </p>
        <img
          src="images/strange-observations-easter-egg.jpg"
          alt=""
          className={`hover-image ${hovered ? "fade-in" : "fade-out"}`}
          aria-hidden={!hovered}
        />
      </div>
    </div>
  );
};

export default HoverStrangeObservationsReveal;
