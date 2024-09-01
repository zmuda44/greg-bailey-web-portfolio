import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './pages/about-me.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import Resume from './pages/resume.jsx';
import Slider from './pages/image-slider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'slider',
        element: <Slider />,
      },
    ],
  },
]);

console.log("do test with state and see if it refreshes")

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
