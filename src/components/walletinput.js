import { Button, Col, Form, Row } from "react-bootstrap";

function WalletInput({ title, variant, getNfts, view, setView, inputRef }) {
  return (
    <Row className="inputForm">
      <Col lg="2"></Col>
      <Col xs="12" md="12" lg="5">
        <Form.Control type="text" ref={inputRef} placeholder="Wallet address" />
      </Col>
      <Col xs="12" md="12" lg="3" className="d-grid">
        <Button variant={variant} type="submit" onClick={getNfts}  >
          Get NFTs from {title}
        </Button>
      </Col>
      <Col lg="1"></Col>
      <Col lg="1">
        {view === "nft-grid" && (
          <Button
            size="md"
            variant="danger"
            onClick={() => {
              setView("collection");
            }}
          >
            Close
          </Button>
        )}
      </Col>
    </Row>
  );
}
export default WalletInput;