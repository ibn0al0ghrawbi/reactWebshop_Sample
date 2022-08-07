import React, { useState } from "react";
import { TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

export default function FilterCatalog(props) {
 


  const onChange = (newValue) => {
    console.log(newValue);
    
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
      onChange={props.onChange}
    >
      {props.filterList.map((entry, index) => (
        <TreeNode key={entry} value={entry} title={entry} />
      ))}
    </TreeSelect>
  );
}
