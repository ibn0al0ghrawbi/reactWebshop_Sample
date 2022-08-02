import React from "react";
import PagePic from "../PagePic/PagePic.jsx";
import TileCard from "../Tile_Card/TileCard.jsx";
import HeaderButton from "../HeaderButtons/HeaderButton.jsx";

const ipsumDescription =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

export default function Body() {
  return (
    <div className="bodyDiv">
      <div className="bodyHeadContainer">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="row1">
        <div className="placeHolderLogo">
          <PagePic />
        </div>
        <div className="loremIpsum">
          <h2>Heading</h2>
          <p style={{ padding: "0", margin: "0" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            <br />
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            <br />
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
      <div className="row2">
        <TileCard
          className="cardFlexChild"
          product_name="Tile 1 Heading"
          price_usd='Example Price USD'
          size='Example Size XXL'
          manufacturer='Example manufacturer'
          quantity='99999'
          color='tripple-white'
        />
        <TileCard
          className="cardFlexChild"
          product_name="Tile 2 Heading"
          price_usd= {ipsumDescription}
          size='1'
          manufacturer='2'
          quantity='99999'
          color='tripple-white'
        />
        <TileCard
          className="cardFlexChild"
          product_name="Tile 3 Heading"
          price_usd='Example Price USD'
          size='Example Size XXL'
          manufacturer='Example manufacturer'
          quantity='99999'
          color='tripple-white'
        />
        <TileCard
          className="cardFlexChild"
          product_name="Tile 4 Heading"
          price_usd='Example Price USD'
          size='Example Size XXL'
          manufacturer='Example manufacturer'
          quantity='99999'
          color='tripple-white'
        />
        <TileCard
          className="cardFlexChild"
          product_name="Tile 5 Heading"
          price_usd='Example Price USD'
          size='Example Size XXL'
          manufacturer='Example manufacturer'
          quantity='99999'
          color='tripple-white'
        />
       
      </div>
      <div className="row3">
        <HeaderButton buttonField="Show More" />
      </div>
    </div>
  );
}
