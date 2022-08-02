import React from "react";
import { Divider } from "antd";
import SideLogo from "../SideLogo/SideLogo.jsx";
import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  GooglePlusSquareFilled,
  InstagramFilled,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footerClass">
      <div className="flex-wrapper">
        <div className="footerInfos_flex_container">
          <div className="flexChild branding-child">
            <h4 style={{ padding: "0 3px", margin: "0" }}>Branding Stuff</h4>
            <p style={{ padding: "0 3px", margin: "0" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              <br /> sed diam nonumy eirmod tempor
            </p>
          </div>
          <div className="flexChild logoContainer">
            <SideLogo />
          </div>
          <div className="flexChild socialFlex">
            <FacebookFilled style={{ fontSize: "45px", color: "#08c" }} />
            <TwitterCircleFilled
              style={{ fontSize: "45px", color: "#1DA1F2" }}
            />
            <LinkedinFilled style={{ fontSize: "45px", color: "#0A66C2" }} />
            <GooglePlusSquareFilled
              style={{ fontSize: "45px", color: "#DB4437" }}
            />
            <InstagramFilled style={{ fontSize: "45px", color: "#C13584" }} />
          </div>
        </div>
        <Divider
          className="divider-flex"
          style={{ background: "black", padding: "0px", width: "80" }}
        />
        <div className="copyRight_div">
          <p>Copyright Ipsum 2022 blabla</p>
        </div>
      </div>
    </div>
  );
}
