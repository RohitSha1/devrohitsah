import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
// import Contact from "./components/Contact";
// import Playlist from "./components/Playlist";
// import Skills from "./components/Playlist";
// import Footer from "./components/Footer";
// import Techstack from "./components/techStack";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


