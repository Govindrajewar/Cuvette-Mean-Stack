import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function AddNewProduct( {setProducts, fetchProducts}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [ratings, setRatings] = useState(0);


  const createProduct = async (e) => {
    try{
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/products", {
            name,
            description,
            price,
            imageURL,
            ratings
        });
        setProducts(res.data.data);
    } catch(err){
        console.log(err);
    }
    setShow(false);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        + Add new Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onInput={(e)=> setName(e.target.value)}
              autoFocus />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onInput={(e)=> setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
              type="number"
              placeholder="Price"
              value={price}
              onInput={(e)=> setPrice(e.target.value)}
              autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>imageURL</Form.Label>
              <Form.Control
              type="text"
              placeholder="imageURL"
              value={imageURL}
              onInput={(e)=> setImageURL(e.target.value)}
              autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ratings</Form.Label>
              <Form.Control
              type="text"
              placeholder="Ratings"
              value={ratings}
              onInput={(e)=> setRatings(e.target.value)}
              autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={createProduct}>
            Create Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewProduct;
