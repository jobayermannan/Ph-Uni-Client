import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
import { adminRoutes } from "./admin.routes";






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