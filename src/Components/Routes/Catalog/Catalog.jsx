import React, { Component } from "react";
import webshop from "../../../webshop.json";
import TileCard from "../../Tile_Card/TileCard";
import "../../../App.css";
import FilterCatalog from "../../FilterCatalog/FilterCatalog.jsx";
import CatalogSearch from "../../CatalogSearch/CatalogSearch.jsx";

export default class Catalog extends Component {
  constructor() {
    super();
    this.state = { webshop: webshop };
    this.setState = this.setState.bind(this); //bind this to use setState in FilterCatalog
  }

  render() {
    return (
      <div className="catalogBody">
        <div className="filterBar">
          <FilterCatalog
            className="filterField"
            setState={this.setState}
            webshop={webshop}
          />
          <CatalogSearch
            className="filterField"
            setState={this.setState}
            webshop={webshop}
          />
        </div>
        <div className="row2">
          {this.state.webshop.map((entry) => (
            <div key={entry.id}>
              {
                <TileCard
                  id={entry.id}
                  className="cardFlexChild"
                  product_name={entry.product_name}
                  price_usd={entry.price_usd}
                  size={entry.size}
                  manufacturer={entry.manufacturer}
                  quantity={entry.quantity}
                  color={entry.color}
                />
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}
