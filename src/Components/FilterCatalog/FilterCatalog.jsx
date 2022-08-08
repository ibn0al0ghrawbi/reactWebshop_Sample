import React from "react";
import { TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

export default function FilterCatalog(props) {
  const filterSet = new Set();

  props.webshop.map((entry) => filterSet.add(entry.subtype)); //generate the list of filter-entries from the json

  const filterArray = Array.from(filterSet);
  
  const onChange = (newValue) => {
    if (Object.keys(newValue).length === 0) {
      //if filter empty then setState as initial json
      props.setState({ webshop: props.webshop });
    } else {
      //otherwise filter by values
      const filteredList = props.webshop.filter(({ subtype }) =>
        newValue.includes(subtype)
      );

      

      props.setState({ webshop: filteredList });
    }
  };

  return (
    <TreeSelect
      showSearch
      style={{
        width: "20%",
        border: "solid hsla(229, 94%, 82%, 0.7) 2px",
      }}
      dropdownStyle={{
        maxHeight: 400,
        overflow: "auto",
      }}
      placeholder="Select Filter"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
    >
      {filterArray.map((entry, index) => (
        <TreeNode key={entry} value={entry} title={entry} />
      ))}
    </TreeSelect>
  );
}
