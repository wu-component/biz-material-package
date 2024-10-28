import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Example from '../src'
import './example.css';

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

console.log(root);


root.render(
  <React.StrictMode>
    <Example {...{}}  />
  </React.StrictMode>
);
