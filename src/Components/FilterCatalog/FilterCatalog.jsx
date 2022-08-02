import React, { useState } from "react";
import { AutoComplete, TreeSelect } from "antd";


const { TreeNode } = TreeSelect;

export default function FilterCatalog() {
  const [value, setValue] = useState();

  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <TreeSelect
      showSearch
      style={{
        width: "20%",
       border: "solid hsla(229, 94%, 82%, 0.7) 2px"
      }}
      value={value}
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
     
    <TreeNode value="leaf1" title="Sneaker" />
    <TreeNode value="leaf2" title="Shirt" />
    <TreeNode value="leaf3" title="Item3" />
    <TreeNode value="leaf4" title="Item4" />
    <TreeNode value="leaf5" title="Item5" />
    
        
      
    </TreeSelect>
  );
}
