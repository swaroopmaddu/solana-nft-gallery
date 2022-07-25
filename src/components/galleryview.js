import { Card,Row, Col, Container } from "react-bootstrap";

function GalleryView({nfts}) {
    return (
      <Container>
        <Row>
          {nfts.map((metadata, index) => (
          <Col xs="12" md="6" lg="3" key={index}>
            <Card
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
                src={metadata?.image}
                alt={metadata?.name}
              />
              <Card.Body>
                <Card.Title style={{ color: "#fff",display:'flex',justifyContent:'center' }}>
                  {metadata?.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
      ))}
        </Row>
      </Container>
    );
}
export default GalleryView;