import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "../Ph-Uni-client/src/App";

import Login from "../Ph-Uni-client/src/pages/Login";
import Register from "../Ph-Uni-client/src/pages/Register";

import { adminRoutes } from "./admin.routes";
import React from "react";






const router =createBrowserRouter( [
	{
		path: '/',
		element: <App></App>,
		
	},
	{
		path: '/admin',
		element: <App></App>,
		children:adminRoutes
	},
	{
		path: '/faculty',
		element: <App></App>,
		children:adminRoutes
	},
	{
		path: '/student',
		element: <App></App>,
		children:adminRoutes
	},

	{
		path: '/login',
		element:<Login/>

	 },
	 {
		path: '/register',
		element:<Register/>

	 }
])


export default router;