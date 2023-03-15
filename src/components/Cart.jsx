import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context";
import { useNavigate } from "react-router-dom";

function Cart() {
  const data = useContext(ProductsContext);
  console.log(data);

  return (
    <>
      {data && data.length > 0
        ? data.map((datum) => {
            return (
              <div>
                
                <img src={datum.thumbnail} alt="" srcset="" />
                <h3>{datum.title}</h3>
                <h3>{datum.price}</h3>
              </div>
            );
          })
        : ""}
    </>
  );
}

export default Cart;
