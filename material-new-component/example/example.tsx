import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from '../src'
import './example.css';
import IProps from '../IProps'

const props: IProps = {
  item: {
    name: "对象信息",
    onClick: (item: number) => {
      console.log("对象信息", item)
    }
  },
  list: [
    {
      onClick: function (item: number): void {
        console.log(1)
        console.log(item)
      },
      name: '一'
    },
    {
      onClick: function (item: number): void {
        console.log(2)
        console.log(item)
      },
      name: '二'
    }
  ],
  name: "测试",
  onClick(item: number): void {
    console.log(item)
  }

}

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Example {...props} />
  </React.StrictMode>
);