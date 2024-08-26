import './index.scss';
import React from "react";
import IProps from "../IProps";

interface Props extends IProps {
  style: React.CSSProperties;
}
export default (_props: Props): React.JSX.Element => {
  const { style = {}} = _props;
  return (
    <div style={style}>
      待开发
    </div>
  )
}