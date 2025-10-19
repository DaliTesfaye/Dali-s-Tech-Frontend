import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetails from "../pages/ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";


function App() {
  return (
    <>
      <Navbar />
      <div/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
