import React from "react";
import { useParams } from "react-router-dom";
import webshop from "../../webshop.json";
import placeholder from "../Tile_Card/placeholder.png";

export default function ProductInfos() {
  const params = useParams();
  const info = params.productid.split("-")[0];
  const product = webshop.filter((item) => item.id === info);

  return (
    <div>
      <div className="productContainer">
        <div className="productPic">
          {" "}
          <img alt="example" src={placeholder} width="440px" />{" "}
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
    </div>
  );
}
