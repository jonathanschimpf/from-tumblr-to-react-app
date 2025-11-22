import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoCard from "./PhotoCard";
import "./TumblrToReact.css";
import "animate.css";

/** Body-scroll lock helpers */
function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [isLocked]);
}

/** Portal-based, layout-proof lightbox */
function Modal({ image, caption, onClose }) {
  const isOpen = Boolean(image);
  useBodyScrollLock(isOpen);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const node = (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <img src={image} alt={caption || "photo"} />
        {caption ? <p className="modal-caption">{caption}</p> : null}
      </div>
    </div>
  );

  // Render OUTSIDE your app container to avoid stacking/overflow issues
  return ReactDOM.createPortal(node, document.body);
}

function TumblrToReact({ data, itemRefs, onScrollToTop }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");

  const handleImageClick = useCallback((image, caption) => {
    setSelectedImage(image);
    setSelectedCaption(caption || "");
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
    setSelectedCaption("");
  }, []);

  return (
    <>
      <InfiniteScroll
        className="infinite-scroll-container"
        dataLength={data.length}
        next={() => {}}
        hasMore={false}
        loader={<h4>Loading…</h4>}
        endMessage={<p className="end-message">That’s all.</p>}
      >
        {data.map((item, index) => (
          <PhotoCard
            key={`${item.image}-${index}`}
            ref={itemRefs[index]}
            image={item.image}
            caption={item.caption}
            onClick={() => handleImageClick(item.image, item.caption)}
            index={index}
            onScrollToTop={onScrollToTop}
          />
        ))}
      </InfiniteScroll>

      <Modal
        image={selectedImage}
        caption={selectedCaption}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default TumblrToReact;
