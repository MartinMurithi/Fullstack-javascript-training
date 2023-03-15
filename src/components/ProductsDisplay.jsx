import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context";
import { CartContext } from "../context";


// function cartReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return [...state, action.payload];
//     case "REMOVE_FROM_CART":
//       return state.filter((product) => product.id);
//     default:
//       return;
//   }
// }


function ProductsDisplay({ category }) {
  let products = useContext(ProductsContext);
  let cartProducts = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(products);
  // const [cart, dispatch] = useReducer(cartReducer, []);
  const [cartProd, setCartProd] = useState([]);

  useEffect(() => {
    if (category === "all") {
      setData(products);
    } else {
      console.log(category);
      const itemsInCategory = products.filter((p) => p.category === category);
      setData(itemsInCategory);
    }
  }, [products, category]);

  const handleNavigation = (id) => {
    navigate(`/products/${id}`);
  };

  const handleCart = (id) => {
    let prod = products.find((product) => product.id === parseInt(id, 10));
     console.log(prod);
    // dispatch({ type: "ADD_TO_CART", payload: prod });
    setCartProd([...prod, prod]);
  };

  console.log(cartProd);

  return (
    <CartContext.Provider value={cartProd}>
      <div className="productsContainer">
        {data && data.length > 0 ? (
          data.map((product) => {
            return (
              <div className="product" key={product.id}>
                <div
                  className="pImg"
                  onClick={() => handleNavigation(product.id)}
                >
                  <img src={product?.images[0]} alt="product " />
                </div>
                <div className="pDetails">
                  <span>{product.title}</span>
                  <span className="price">Price: ${product.price}</span>
                </div>
                <button
                  className="addtoCartBtn"
                  onClick={() => {
                    handleCart(product.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            );
          })
        ) : (
          <div>
            <h2>There are no products</h2>
          </div>
        )}
      </div>
    </CartContext.Provider>
  );
}



export default ProductsDisplay
