import React from "react";
import Footer from "./Footer";
import {useNavigate} from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <h2 className="intro">Welcome to JituMall</h2>
        <button className="viewBtn" onClick={()=>navigate('/products')} >View Products </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
