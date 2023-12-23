import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './pages/Home/Home.jsx'
import Shop from './pages/Shop/Shop'
import NotFound from './pages/NotFound/NotFound.jsx'
import About from './pages/About/About.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/shop",
    element: <Shop></Shop>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
