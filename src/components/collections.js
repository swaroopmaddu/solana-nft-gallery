import { Badge, Card, Col, Container, Row } from "react-bootstrap";

function Collections({ groupedNfts, variant, setNfts, setView }) {
  return (
    <Container>
      <Row>
        {Object.keys(groupedNfts).map((metadata, index) => (
          <Col xs="12" md="6" lg="3" key={index}>
            <Card
              onClick={() => {
                setNfts(groupedNfts[metadata]);
                setView("nft-grid");
              }}
              className="imageGrid"
              lg="3"
              style={{
                width: "100%",
                backgroundColor: "#2B3964",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src={groupedNfts[metadata][0]?.image}
                alt={groupedNfts[metadata][0]?.name}
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card.Body>
                <span>
                  <Card.Title style={{ color: "#fff" }}>{metadata.length>0 ? metadata :"Unknown"}</Card.Title>
                  <Badge pill bg={variant} text="light">
                    <h6>{groupedNfts[metadata].length}</h6>
                  </Badge>
                </span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Collections;