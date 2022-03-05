import React from "react";

const Footer = () => (
  <footer
    className="page-footer font-small"
    style={{
      position: "fixed",
      bottom: "0",
      width: "100%",
      backgroundColor: "#212529",
    }}
  >
    <div className="footer-copyright text-center py-3" style={{ color: "#fff" }} >
      © 2020 Copyright:  {' '}
      <a href="https://swaroopmaddu.me/" style={{ color: "#fff" }}>
        Swaroop Maddu
      </a>
    </div>
  </footer>
);

export default Footer;
