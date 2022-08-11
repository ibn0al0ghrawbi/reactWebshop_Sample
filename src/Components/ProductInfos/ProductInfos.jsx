import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SpinnerFunction from "../SpinnerFunction/SpinnerFunction.jsx";

export default function ProductInfos() {
  const [webshop, setWebshop] = useState([]);
  const [dataReturned, setDataReturned] = useState(false);

  const params = useParams();
  const info = params.productid.split("-")[0];
  let product;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8080/catalog/${info}`);
      setWebshop(result.data);
      setDataReturned(true);
    };

    fetchData();
  }, [info]);

  function CalcData() {
    return (
      <div className="productContainer">
        <div className="productPic">
          {" "}
          <img alt="example" src={product[0].link} width="340px" />{" "}
        </div>
        <div className="productDetails">
          <span className="productDetailsDescript">Product Name:</span>{" "}
          <span className="rightSide">{product[0].product_name}</span> <br />
          <span className="productDetailsDescript">Color Code: </span>
          <span className="rightSide">{product[0].color}</span> <br />
          <span className="productDetailsDescript">Manufacturer: </span>{" "}
          <span className="rightSide">{product[0].manufacturer}</span> <br />
          <span className="productDetailsDescript">Size: </span>
          <span className="rightSide">{product[0].size}</span> <br />
          <span className="productDetailsDescript">Subtype: </span>
          <span className="rightSide">{product[0].subtype}</span> <br />
          <span className="productDetailsDescript">Price: </span>
          <span className="rightSide">${product[0].price_usd}</span> <br />
          <span className="productDetailsDescript">Amount available: </span>
          <span className="rightSide">{product[0].quantity}</span> <br />
        </div>
      </div>
    );
  }



  product = webshop.filter((item) => item.id === info); //this needs to become the response webs

  return <div>{dataReturned ? <CalcData /> : <SpinnerFunction />}</div>;
}
