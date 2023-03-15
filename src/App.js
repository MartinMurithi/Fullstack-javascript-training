import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import ProductsDisplay from "./components/ProductsDisplay";
import Cart from './components/Cart'
import axios from "axios";
import { createContext } from "react";

export const ProductsContext = createContext([]);

function App() {
  const [productss, setProducts] = useState([]);

  //FETCH DATA 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        console.log(response);
      } catch (error) {
        console.log(`The error is' ${error}`);
      }
    };
    fetchProducts();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categories = productss.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [productss]);
  return (
    <>
      <Navbar />
      <ProductsContext.Provider value={productss}>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path={"/products"} element={<Products />}>
            <Route index element={<ProductsDisplay category={"all"} />} />

            {categories.length > 0 &&
              categories.map((c) => {
                return (
                  <Route
                    path={`${c}`}
                    element={<ProductsDisplay category={`${c}`} />}
                  />
                );
              })}
          </Route>
          <Route
            path="/products/:id"
            element={<OneProduct  />}
          />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </ProductsContext.Provider>
    </>
  );
}
export default App;

