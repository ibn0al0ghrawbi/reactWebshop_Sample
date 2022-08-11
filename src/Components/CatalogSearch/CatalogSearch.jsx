import React from "react";

import { Input } from "antd";

const { Search } = Input;

export default function CatalogSearch(props) {
  const onSearch = (value) => { //searching works only with exact values "Nike" instead of "nike"
    if (Object.keys(value).length === 0) {
      //if searchbar empty then setState as initial json
      props.setState({ webshop: props.webshop });
    } else {
      //otherwise filter by values
      const filteredList = props.webshop.filter((obj) => {
        for (const item in obj) {
          if (!obj.hasOwnProperty(item)) continue;
          if(obj[item].includes(value)){
            return obj
          } 
        }
      });
     
      props.setState({ webshop: filteredList, countedElements: filteredList.length, showElements: 6, buttonField: "Show More"  }); //return count of items for show more button 
    }
  };

  return (
    <Search
      placeholder="search in catalog"
      onSearch={onSearch}
      enterButton
      style={{
        width: "20%",
        border: "solid hsla(229, 94%, 82%, 0.7) 2px",
        marginLeft: "5rem",
      }}
    />
  );
}
