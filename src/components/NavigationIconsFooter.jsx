import React from "react";
import "./NavigationIconsFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const NavigationIcons_Footer = ({ onRandomSelect, onGoToTop }) => {
  return (
    <>
      <div className="navigation-icons-footer">
        <OverlayTrigger
          delay={{ show: 60, hide: 60 }}
          className="responsiveNavigationIcon"
          placement="top"
          overlay={
            <Tooltip className="tooltip-inner-navigation-styles">
              Travel Back To The Present
            </Tooltip>
          }
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            onClick={onGoToTop}
            size="2x"
            className="responsiveNavigationIcon"
            style={{ cursor: "pointer" }}
          />
        </OverlayTrigger>
        <OverlayTrigger
          delay={{ show: 60, hide: 60 }}
          placement="top"
          className="responsiveNavigationIcon"
          overlay={
            <Tooltip className="tooltip-inner-navigation-styles">
              Travel To A Random Photo
            </Tooltip>
          }
        >
          <FontAwesomeIcon
            icon={faShuffle}
            onClick={onRandomSelect}
            size="2x"
            className="responsiveNavigationIcon"
            style={{ transform: "rotate(-90deg)", cursor: "pointer" }}
          />
        </OverlayTrigger>
      </div>
      <h3 className="end-message">[2010]</h3>
    </>
  );
};

export default NavigationIcons_Footer;
