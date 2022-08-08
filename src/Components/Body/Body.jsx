import React from "react";
import PagePic from "../PagePic/PagePic.jsx";
import HomeTileCard from "../HomeTileCard/HomeTileCard.jsx"
import HeaderButton from "../HeaderButtons/HeaderButton.jsx";
import productPic from "../HomeTileCard/product_pic.jpg"
import windTurbines from "../HomeTileCard/sustainable.jpg"
import humanitarian from "../HomeTileCard/human.jpg"
import customerService from "../HomeTileCard/customServ.jpg"


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
        <HomeTileCard
          className="cardFlexChild"
          category="Discover our unique styles of handmade shirts, vegan leather shoes and italian production!"
          picture={productPic}
          alt="shoes-clothes-and-package"
        />
        <HomeTileCard
          className="cardFlexChild"
          category="Discover how we are saving the environment at our production sites."
          picture={windTurbines}
          alt="windturbines-on-a-field"
        />
        <HomeTileCard
          className="cardFlexChild"
          category="We are supporting humanitarian projects all around the globe."
          picture={humanitarian}
          alt="paramedic on a plaza with masks"
        />
        <HomeTileCard
           className="cardFlexChild"
           category="Questions, Critism or Suggestions? Get in touch with our customer service!"
           picture={customerService}
           alt="smiling customer-service employee"
        />
       
       
      </div>
      <div className="row3">
        
      </div>
    </div>
  );
}
