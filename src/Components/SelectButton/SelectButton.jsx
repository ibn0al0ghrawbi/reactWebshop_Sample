import { Button } from "antd";

export default function SelectButton(props) {
  return (
    <Button
      shape="round"
      size="large"
      className="selectButton"
      style={{ background: "hsla(219, 94%, 82%, 0.7)" }}
      onClick={props.onClick}
    >{props.buttonField}</Button>
  );
}