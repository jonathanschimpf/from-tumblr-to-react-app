import React from "react";
import "./HeaderQuickConnects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faThreads,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
// import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import {  Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

function HeaderQuickConnects () {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="icon-row">
        <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-quickconnects">.DEV</Tooltip>}
            >
            <div className="m-3 divquickconnects">
              <a
                href="https://jonathanschimpf.dev/"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faDev} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-quickconnects">LinkedIn</Tooltip>}
            >
            <div className="m-3 divquickconnects">
              <a
                href="https://www.linkedin.com/in/jonathan-schimpf/"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-quickconnects">GitHub</Tooltip>}
            >
            <div className="m-3 divquickconnects">
              <a
                href="https://github.com/jonathanschimpf"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col"> 
              <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-quickconnects">Instagram</Tooltip>}
            >
            <div className="m-3 divquickconnects">
              <a
                href="https://www.instagram.com/schimpfstagram/"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
          <Col className="icon-col">
          <OverlayTrigger
              placement="bottom"
              delay={{ show: 60, hide: 60 }}
              overlay={<Tooltip className="tooltip-inner-quickconnects">Threads</Tooltip>}
            >
            <div className="m-3 divquickconnects">
              <a
                href="https://www.threads.net/@schimpfstagram"
                rel="noreferrer"
                target="_blank"
                className="button responsiveIcon blackoutIcons"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faThreads} size="2x" />
              </a>
            </div>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export default HeaderQuickConnects;
