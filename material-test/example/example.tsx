import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from '../src'
import './example.css';
import IProps from "../IProps";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

const props: IProps = {
  age: 0,
  color: "#cdcdcd",
  date: "2021-03-23",
  dateTime: "2021-03-23 12:23:24",
  image: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  name: "测试",
  selectMulVal: ['1'] as any,
  selectVal: '1' as any,
  switch: false,
  time: "12:23:24"

}

root.render(
  <React.StrictMode>
    <Example {...props} />
  </React.StrictMode>
);