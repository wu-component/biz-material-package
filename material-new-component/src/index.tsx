import './index.scss';
import React from "react";
import IProps from "../IProps";
export default (_props: IProps): React.JSX.Element => {
  console.log(_props)
  const { item, list = [], name = '', onClick} = _props;
  return (
    <div className={'material-new-component-container'}>
      <p onClick={() => {
        onClick?.(1);
      }}>一级属性点击 {name}</p>
      <p onClick={() => {
        item?.onClick?.(1);
      }}>对象属性中配置了方法： {item?.name}</p>
      <div className={'content-list'}>
        {
          list.map((t, i) => {
            return (
              <div className={'item'} onClick={() => {
                t?.onClick?.(i)
              }}>
                列表配置事件： {
                  t.name
                }
              </div>
            )
          })
        }

      </div>
    </div>
  )
}