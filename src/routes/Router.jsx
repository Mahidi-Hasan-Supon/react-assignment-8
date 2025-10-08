import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Leyout/Root';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import Installation from '../pages/Installation';
import AppDetails from '../pages/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   hydrateFallbackElement:<p>Loading...</p>,
   children:[
    {   
        path:'/home',
        Component:Home
    },
    {   
        path:'/',
        Component:Home
    },
    {
        path:'/apps',
        Component:Apps
    },
    {
        path:'/installation',
        Component:Installation
    },
    {
        path:'/appdetails/:id',
        Component:AppDetails
    }
   ]
  },
]);