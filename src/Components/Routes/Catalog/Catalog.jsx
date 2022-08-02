import React from "react";
import webshop from "../../../webshop.json";
import TileCard from "../../Tile_Card/TileCard";
import '../../../App.css';
import FilterCatalog from "../../FilterCatalog/FilterCatalog.jsx";
import CatalogSearch from "../../CatalogSearch/CatalogSearch.jsx";

export default function Catalog() {
  return (
    <div className="catalogBody">
      <div className="filterBar">
        <FilterCatalog className="filterField"/>
        <CatalogSearch className="filterField" />
      </div>
      <div className="row2">
        {webshop.map((entry) => (
          <div key={entry.id}>
            {
              

                <TileCard
                  key={entry.id}
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
