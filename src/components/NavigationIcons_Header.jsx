import React from "react";
import "./NavigationIcons_Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const NavigationIcons_Header = ({ onRandomSelect, onGoToBottom }) => {
  return (
    <div className="navigation-icons-header">
      <OverlayTrigger
        delay={{ show: 60, hide: 60 }}
        className="responsiveNavigationIcon"
        placement="top"
        overlay={
          <Tooltip className="tooltip-inner-navigation-styles">
            Travel Back In Time
          </Tooltip>
        }
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={onGoToBottom}
          size="2x"
          className="responsiveNavigationIcon "
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
          style={{ transform: "rotate(90deg)", cursor: "pointer" }}
        />
      </OverlayTrigger>
    </div>
  );
};

export default NavigationIcons_Header;
