import React, { Component } from "react";
import TileCard from "../../Tile_Card/TileCard";

import "../../../App.css";
import FilterCatalog from "../../FilterCatalog/FilterCatalog.jsx";
import CatalogSearch from "../../CatalogSearch/CatalogSearch.jsx";
import { Button } from "antd";
import axios from "axios";
import SpinnerFunction from "../../SpinnerFunction/SpinnerFunction.jsx";


const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default class Catalog extends Component {
  constructor() {
    super();
    api
      .get("/catalog")
      .then((res) => {
        this.setState({ webshop: res.data });
        this.setState({ webshopStatic: res.data });
        this.setState({ buttonField: "Show More" }); //after data is fetched, show Button
      })
      .catch((err) => console.log(err));

    this.state = {
      webshop: [],
      webshopStatic: [],
      showElements: 6,

      buttonField: "",
    };
    this.setState = this.setState.bind(this); //bind this to use setState in FilterCatalog
  }

  showMore = () => {
    if (this.state.showElements + 6 <= this.state.webshop.length) {
      this.setState((state) => ({ showElements: state.showElements + 6 }));
    } else {
      this.setState({
        showElements: this.state.webshop.length,
        buttonField: "",
      });
      alert("End of list reached");
    }
  };

  componentDidMount() {
    const countedElements = this.divElement.children.length;
    this.setState({ countedElements });
  }

  render() {
    const itemsToShow = this.state.webshop
      .slice(0, this.state.showElements)
      .map((entry) => (
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
              link={entry.link}
              webshop={this.state.webshop}
            />
          }
        </div>
      ));

    return (
      <div className="flex-wrapper">
        <div className="catalogBody">
          <div className="filterBar">
            <FilterCatalog
              className="filterField"
              setState={this.setState}
              webshop={this.state.webshopStatic}
            />
            <CatalogSearch
              className="filterField"
              setState={this.setState}
              webshop={this.state.webshopStatic}
            />
          </div>
          <div
            className="row2"
            ref={(divElement) => {
              this.divElement = divElement;
            }}
          >
            {itemsToShow.length ? itemsToShow : <SpinnerFunction />}
          </div>
          <div className="row3">
            <Button
              shape="round"
              size="large"
              className="showMoreButton"
              style={{
                background: "hsla(210, 94%, 82%, 0.9)",
                marginTop: "3rem",
              }}
              onClick={this.showMore}
            >
              {this.state.buttonField}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
