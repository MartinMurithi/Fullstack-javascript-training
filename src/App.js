import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fetch from "./components/Fetch";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import ProductsDisplay from "./components/ProductsDisplay";
import Test from "./components/Test";
import axios from "axios";
import { createContext } from "react";

export const ProductsContext = createContext([]);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        console.log(response);
        setProducts(response.data.products);
      } catch (error) {
        console.log(`The error is' ${error}`);
      }
    };
    fetchProducts();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categories = products.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [products]);
  return (
    <>
      <ProductsContext.Provider value={products}>
        <Navbar />
        <Routes>
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
            element={<OneProduct products={products} />}
          />
        </Routes>
      </ProductsContext.Provider>
    </>
  );
}
export default App;

//
//);
