import React, { Component } from "react";
import webshop from "../../../webshop.json";
import TileCard from "../../Tile_Card/TileCard";
import "../../../App.css";
import FilterCatalog from "../../FilterCatalog/FilterCatalog.jsx";
import CatalogSearch from "../../CatalogSearch/CatalogSearch.jsx";

export default class Catalog extends Component {
  /**
   * state = {
    webshop: [],
  };

   * 
   */

  render() {
    let filteredList;
    const filterSet = new Set();

    webshop.map((entry) => filterSet.add(entry.subtype));

    const filterArray = Array.from(filterSet);
    console.log("in Catalog", filterSet);

    /*
    
    
    */
    const changeFilter = (newValue) => {
      console.log("in Catalog", newValue, typeof newValue);

      filteredList = webshop.filter(({ subtype }) =>
        newValue.includes(subtype)
      );
      console.log("filtered List in Catalog ", filteredList);

      this.setState(filteredList);
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
          {webshop.map((entry) => (
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
