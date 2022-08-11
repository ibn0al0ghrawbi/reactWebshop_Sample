import React, { Component } from "react";
import { Card } from "antd";
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
      link: this.props.link,
      alt: this.props.product_name,
      webshop: this.props.webshop,
    };
  }

  render() {
    return (
      <Card
        hoverable
        style={{
          width: 340,
          padding: 30,
          border: "solid hsla(229, 94%, 82%, 0.7) 4px",
          fontFamily: "Uchen, serif",
        }}
        cover={<img alt={this.state.alt} src={this.state.link} />}
      >
        <Meta
          description={`${this.state.title + "\nPrice: $" + this.state.price}`}
        />
        <Link to={`/Catalog/${this.state.id}-${this.state.title}`}>
          <SelectButton buttonField="Open Product" />
        </Link>
      </Card>
    );
  }
}
