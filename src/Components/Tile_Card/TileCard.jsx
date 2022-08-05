import React, { Component } from "react";
import { Card } from "antd";
import placeholder from "./placeholder.png";
import SelectButton from "../SelectButton/SelectButton.jsx";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default class TileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.product_name,
      size: this.props.size,
      color: this.props.color,
      quantity: this.props.quantity,
      manufacturer: this.props.manufacturer,
      price: this.props.price_usd,
    };
  }

  openItemCard = () => {
    console.log(this.state.id + " clicked");
  };

  render() {
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
          description={`${
            "Title: " +
            this.state.title +
            "\nSize: " +
            this.state.size +
            "\nColor: " +
            this.state.color +
            "\nQuantity: " +
            this.state.quantity +
            "\nManufacturer: " +
            this.state.manufacturer +
            "\nPrice: $" +
            this.state.price
          }`}
        />
        <Link to={`/Catalog/${this.state.id}-${this.state.title}` } >
          <SelectButton
            buttonField="Open Product"
            onClick = {this.openItemCard}
          />
        </Link>
      </Card>
    );
  }
}
