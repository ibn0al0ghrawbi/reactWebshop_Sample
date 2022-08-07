import React, { Component } from "react";
import { Card } from "antd";




const { Meta } = Card;

export default class HomeTileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      category: this.props.category,
      picture: this.props.picture,
      alt: this.props.alt,
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
          fontSize: "1.3rem",
        }}
        cover={<img alt={this.state.alt} src={this.state.picture} />}
      >
        <Meta
          description={`${this.state.category }`}
        />
        
      </Card>
    );
  }
}
