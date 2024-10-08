import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import "./styles/global.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
