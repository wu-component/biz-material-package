import './index.scss';
import React from "react";
import IProps from "../IProps";
export default (_props: IProps): React.JSX.Element => {
  const { age, name, date, dateTime, time, selectVal, selectMulVal = [], image, color} = _props || {};
  return (
    <div className={'material-test-container'}>
      <p>age: {age}</p>
      <p>name: {name}</p>
      <p>date: {date}</p>
      <p>dateTime: {dateTime}</p>
      <p>time: {time}</p>
      <p>time: {time}</p>
      <p>switch: {_props.switch? 'true': 'false'}</p>
      <p>selectVal: {selectVal}</p>
      <p style={{color: color}}>color: {color}</p>
      <p>selectMulVal: {selectMulVal.toString()}</p>
      <p>image: <img src={image}  alt={''} style={{width: '200px'}}/></p>
    </div>
  )
}