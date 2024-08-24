import './index.scss';
import React from "react";
import IProps from "../IProps";
export default (_props: IProps): React.JSX.Element => {
  return (
    <>
        {(_props as any).children }
    </>
  )
}