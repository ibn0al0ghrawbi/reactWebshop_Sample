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
  }

  render() {
    const filterSet = new Set();

    webshop.map((entry) => filterSet.add(entry.subtype));

    const filterArray = Array.from(filterSet);
    console.log("Available Filter Categories: ", filterSet);

    const changeFilter = (newValue) => {
      if (Object.keys(newValue).length === 0) {
        //if filter empty then setState as initial json
        this.setState({ webshop: webshop });
      } else {
        //otherwise filter by values
        const filteredList = webshop.filter(({ subtype }) =>
          newValue.includes(subtype)
        );

        this.setState({ webshop: filteredList });
      }
    };

    return (
      <div className="catalogBody">
        <div className="filterBar">
          <FilterCatalog
            className="filterField"
            filterList={filterArray}
            onChange={changeFilter}
          />
          <CatalogSearch className="filterField" />
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
