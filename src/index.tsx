import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cursor } from './components/Cursor/Cursor';
import { Intro } from './components/Intro/Intro';
import { Nav } from './components/Nav/Nav';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cursor />
    <Nav />
    <Intro />
  </React.StrictMode>
);
