import { Button } from "antd";

export default function HeaderButton(props) {
  return (
    <Button
      shape="round"
      size="large"
      className="homePageButton"
      style={{ background: "hsla(229, 94%, 82%, 0.7)" }}
    >{props.buttonField}</Button>
  );
}
