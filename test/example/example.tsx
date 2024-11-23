import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from '../src'
import './example.css';

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Example name={''} age={0} />
  </React.StrictMode>
);