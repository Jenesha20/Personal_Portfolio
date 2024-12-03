import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import con from "../../images/contact.avif";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                {/* Replace form with an image */}
                <Col md={4}>
                  <div className="image-container">
                    <img
                      src={con} // Replace with your image URL
                      alt={con}
                      className="contact-image"
                      style={{ width: "300px", height: "350px" , borderRadius: "25px",}}
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:jeneshamalars@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        jeneshamalars@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+8870770296`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+8870770296</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/iUHJvPAhJXwJayo68"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Erode, Tamil Nadu
                        </p>
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
