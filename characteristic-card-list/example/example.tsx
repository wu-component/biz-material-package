import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from '../src'
import './example.css';
import CharacteristicListIProps from "../IProps";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

const config: CharacteristicListIProps = {
  columns: 3,
  list: [
    {
      icon: 'https://tianshu.alicdn.com/ee09d9f7-9628-44fb-8927-b318d9a61cf5.png',
      description: '打破物料孤岛',
      title: '综合场景',
      fontColor: 'red',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/19307bb5-2881-44ad-82d3-f92e2f44aabb.png',
      description: '低代码生态的基础',
      title: '综合场景',
      fontColor: '#000',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/9652b6f7-8bc9-4527-9854-06c59f2b0bc8.png',
      description: '低代码引擎实现标准',
      title: '综合场景',
      fontColor: '#000',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/ee09d9f7-9628-44fb-8927-b318d9a61cf5.png',
      description: '打破物料孤岛',
      title: '综合场景',
      fontColor: 'red',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/19307bb5-2881-44ad-82d3-f92e2f44aabb.png',
      description: '低代码生态的基础',
      title: '综合场景',
      fontColor: '#000',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/9652b6f7-8bc9-4527-9854-06c59f2b0bc8.png',
      description: '低代码引擎实现标准',
      title: '综合场景',
      fontColor: '#000',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/ee09d9f7-9628-44fb-8927-b318d9a61cf5.png',
      description: '打破物料孤岛',
      title: '综合场景',
      fontColor: 'red',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/19307bb5-2881-44ad-82d3-f92e2f44aabb.png',
      description: '低代码生态的基础',
      title: '综合场景',
      fontColor: '#000',
      fontSize: 16,
      width: 325
    },
    {
      icon: 'https://tianshu.alicdn.com/9652b6f7-8bc9-4527-9854-06c59f2b0bc8.png',
      description: '低代码引擎实现标准',
      title: '综合场景',
      fontColor: '#000',
      fontSize: 16,
      width: 325
    }
  ],
  subTitleConfig: {
    text: '精心打造低代码领域的编排、入料、出码、渲染模块',
    fontColor: 'red',
    fontSize: 16

  },
  titleConfig: {
    text: '最小内核',
    fontColor: 'green',
    fontSize: 40

  },
  onClick: (ss) => {
    console.log(ss)
  }

}

root.render(
  <React.StrictMode>
    <Example {...config}  />
  </React.StrictMode>
);