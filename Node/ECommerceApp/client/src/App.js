import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Products from "./components/Products";
import Container from "react-bootstrap/esm/Container";
import AddNewProduct from "./components/AddNewProduct";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])


  const fetchProducts = async () => {
    try{
      const res = await axios.get("http://localhost:4000/products");
      setProducts(res.data.data);
    } catch(err){
      console.log(err);
    }
  };

  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <h1 className="display-1">Welcome to Easy Buy</h1>
        <p className="lead">
          lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et
          dolore magna aliqu.🚀
        </p>
        <br />
        <Products products={products} />
        <AddNewProduct setProducts={setProducts} fetchProducts={fetchProducts}/>
      </Container>
    </div>
  );
}

export default App;
