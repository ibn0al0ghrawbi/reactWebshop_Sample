import React from "react";

import { Input } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);

export default function CatalogSearch() {
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
