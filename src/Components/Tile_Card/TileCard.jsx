import React, { useState } from "react";
import { Card } from "antd";
import placeholder from "./placeholder.png";
import SelectButton from "../SelectButton/SelectButton.jsx";
const { Meta } = Card;

export default function TileCard(props) {
 
  return (
    <Card
      hoverable
      style={{
        width: 340,
        border: "solid hsla(229, 94%, 82%, 0.7) 4px",
        fontFamily: "Uchen, serif",
      }}
      cover={<img alt="example" src={placeholder} />}
    >
      <Meta
        title={props.product_name}
        description={`${
          "Size: " +
          props.size +
          "\nColor: " +
          props.color +
          "\nQuantity: " +
          props.quantity +
          "\nManufacturer: " +
          props.manufacturer +
          "\nPrice: $" +
          props.price_usd
        }`}
      />
      <SelectButton buttonField="Open Product"/>
    </Card>
  );
}
