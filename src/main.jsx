import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './routes/root.jsx';
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
const router=createBrowserRouter(
  [
    {
      path:'/',
      element: <Root/>

    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>

  </React.StrictMode>,
)
