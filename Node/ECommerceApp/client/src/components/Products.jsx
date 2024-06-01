import { Button, Card, Row, Col } from "react-bootstrap";

function Products( { products }) {

  return (
    <Row>
      {products.map((product, index) => (
        <Col md={4} className="d-flex justify-content-center my-2">
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.imageURL} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: {product.price}.00 ₹</Card.Text>
              <Card.Text>Ratings: {product.ratings}</Card.Text>
              <Button variant="warning" style={{ marginRight: "5px" }}>
                Add to cart
              </Button>
              <Button variant="success">Buy now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Products;
