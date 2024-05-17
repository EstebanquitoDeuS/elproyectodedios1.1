import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Descripcion } from './components/Descripcion';
import { Computadoras } from './components/Computadoras';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <>
      <NavBar />
      <Banner />
      <Descripcion />
      <Computadoras />
      <Footer />
    </>,
  },{
    path: "*", 
    element: <>
      <NavBar />
      <Banner />
      <Descripcion />
      <Computadoras />
      <Footer />
    </>,
  }, 
  {
    path: "/audio", 
    element: <> 
    <NavBar/>
    <div>Hoals</div>
    </>
  },
  {
    path: "/video", 
    element: <> 
    <NavBar/>
    <div>Hoals</div>
    </>
  },
  {
    path: "/gaming", 
    element: <> 
    <NavBar/>
    <div>Hoals</div>
    </>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
