import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import App from './App';
import './index.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import { MyContextProvider } from './PassContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/features",
    element: <Features />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/vault",
    element: <App />
  },
  {
    path: "/manager",
    element: <App />
  }


])


const root = createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <MyContextProvider>
        <RouterProvider router={router} />
    </MyContextProvider>
  // </React.StrictMode>
);
