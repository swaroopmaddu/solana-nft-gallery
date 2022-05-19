import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => (
  <Row
    style={{
      position: "fixed",
      bottom: "0",
      padding: "10px",
      width: "110%",
      backgroundColor: "#111827",
    }}
  >
    <Col xs="12" md="12" lg="6" className="text-center">
      <div style={{ color: "#fff" }}>
        View source:{" "}
        <a
          href="https://github.com/swaroopmaddu/solana-nft-gallery"
          style={{ color: "#fff" }}
        >
          Github
        </a>
      </div>
    </Col>

    <Col xs="12" md="12" lg="6" className="text-center">
      <div style={{ color: "#fff" }}>
        © 2022 Copyright:{" "}
        <a
          href="https://swaroopmaddu.github.io/"
          target={'_blank'}
          style={{ color: "#fff" }} rel="noreferrer"
        >
          Swaroop Maddu
        </a>
      </div>
    </Col>
  </Row>
);

export default Footer;
