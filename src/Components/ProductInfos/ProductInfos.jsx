import React from "react";
import { useParams } from "react-router-dom";
import webshop from "../../webshop.json";

export default function ProductInfos() {
  const params = useParams();
  const info = params.productid.split("-")[0];
  const product = webshop.filter((item) => item.id === params.productid.split("-")[0]);

  return (
    <div>
      <h1>
        Product Infos [`{product.values}`, 'product id: '{info}]
      </h1>
      {console.log(Object.entries(product))}
    </div>
  );
}
