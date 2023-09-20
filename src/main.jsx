import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';
// import MainLayout from './Layouts/MainLayout';
// import Home from './Pages/Home/Home';
// import Products from './Pages/Products/Products';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,

//     children: [
//       {
//         path: '/home',
//         element:<Home></Home>
//       },
//       {
//         path: '/products',
//         element:<Products></Products>
//       },
//     ]
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
