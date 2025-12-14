import React, { useState, forwardRef } from "react";
import "./PhotoCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

// ALL COMMENTS IN ALL CAPS

const PhotoCard = forwardRef(
  ({ image, caption, onClick, index, onScrollToTop = () => {} }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoaded = () => setIsLoaded(true);

    // SCROLL TO TOP (DELEGATE TO PARENT SO BEHAVIOR STAYS CONSISTENT)
    const scrollToTop = (e) => {
      e.stopPropagation();
      console.log("CHEVRON CLICKED");
      onScrollToTop();
    };

    console.log("RENDERING PHOTOCARD IMAGE:", image);

    return (
      <div className="photo-card-wrapper" ref={ref}>
        <div className="photo-card" onClick={onClick}>
          <div className="photo-card-media">
            <LazyLoadImage
              src={image}
              alt={caption}
              effect="blur"
              onLoad={handleImageLoaded}
            />
          </div>

          {isLoaded && <p className="caption">{caption}</p>}

          {isLoaded && index >= 4 && (
            <div className="general-navigation-icon-div">
              <button
                type="button"
                className="general-navigation-icon-btn"
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <FontAwesomeIcon
                  size="2x"
                  className="general-navigation-icon"
                  icon={faChevronUp}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default PhotoCard;
