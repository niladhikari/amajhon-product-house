// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import DashboardLayout from '../Layouts/DashboardLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    
        children: [
          {
            path: '/',
            element:<Home></Home>
          },
          {
            path: '/products',
            element:<Products></Products>
          },
          {
            path:'/dashboard',
            element:<DashboardLayout></DashboardLayout>
          },
        ]
    }
])

export default router;