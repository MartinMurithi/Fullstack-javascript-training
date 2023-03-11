// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";



// function Fetch() {
//   const [products, setProducts] = useState([]);

//   //fetch products
//   useEffect(() => {
//     let fetchProducts = async () => {
//       let response = await axios.get("https://dummyjson.com/products");
//       // console.log(response);
//       setProducts(response.data.products);
//     };
//     fetchProducts();
//   }, []);

//   return (<>
//     <ProductsContext.Provider value={products}>
//       {products && products.length > 0 ? 
//         products.map(product => {
//           return(
//             <h3 key={product.id}>{product.title}</h3>
//           )
//         }):null}
//     </ProductsContext.Provider>
//   </>
//   )
// }

// export default Fetch;
