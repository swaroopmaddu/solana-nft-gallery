import React from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

const Footer = () => (
  <Row
    style={{
      position: "fixed",
      bottom: "0",
      padding: "10px",
      width: "100%",
      backgroundColor: "#212529",
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
        © 2020 Copyright:{" "}
        <a href="https://swaroopmaddu.me/" style={{ color: "#fff" }}>
          Swaroop Maddu
        </a>
      </div>
    </Col>
  </Row>
);

export default Footer;
