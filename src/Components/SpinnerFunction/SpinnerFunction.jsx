import React from 'react'
import { Spin } from 'antd';

export default function SpinnerFunction() {
    return (
      <div className="flex-wrapper">
        <div className="spinContainer">
          <Spin size="large" />
        </div>
      </div>
    );
  }