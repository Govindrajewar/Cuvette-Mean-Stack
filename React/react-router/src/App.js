import "./App.css";
import Moment from "./components/Moment";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Moment/>

      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
