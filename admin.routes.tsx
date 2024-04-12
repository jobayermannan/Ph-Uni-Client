
import { ReactNode } from 'react'
import AdminDashboard from '../pages/admin/AdminDashboard'
import CreateAdmin from '../pages/admin/CreateAdmin'
import CreateFaculty from '../pages/admin/CreateFaculty'
import CreateStudent from '../pages/admin/CreateStudent'
import { NavLink } from 'react-router-dom'

type TRoutes ={
	
	path:string,
	element: ReactNode,
	
}
type TSidebarItem ={
	key:string,
	label:ReactNode,
	
	
	children?:TSidebarItem[]
}


const AdminRoutes= [

	{
		name: 'Dashboard',
		path:'dashboard',
		element: <AdminDashboard/>
	},{
		name: 'User Management',
		children:[
			{
				name: 'create-admin',
				path:'create-admin',
				element: <CreateAdmin/>
			},	{
				name: 'create-faculty',
				path:'create-faculty',
				element: <CreateFaculty/>
			},	
			{
				name: 'create-student',
				path:'create-student',
				element: <CreateStudent/>
			},
			{
				name: 'createDj',
				path:'createdj',
				element: <CreateStudent/>
			},
		]
	}
]




export const adminSidebarItems = AdminRoutes.reduce((acc:TSidebarItem[], item) => {
	if (item.path && item.element) {
	  acc.push({
		 key: item.path,
		 label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
	  });
	} 
	
	else if (item.children) {
	
		 acc.push({
			key: item.name,
			label:item.name,
			children:item.children.map((child)=>{
			  return {
				 key:child.name,
			  label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
			  }
			})
		 });
	  
	}
 
	return acc;
 }, []);






















//! Programmatical way.

export const adminRoutes = AdminRoutes.reduce((acc:TRoutes[], item) => {
	if (item.path && item.element) {
	  acc.push({
		 path: item.path,
		 element: item.element,
	  });
	} else if (item.children) {
	  item.children.forEach(child => {
		 acc.push({
			path: child.path,
			element: child.element,
		 });
	  });
	}
 
	return acc;
 }, []);
 
 console.log(JSON.stringify(adminRoutes))
 
//  //! Hard coded way
// const superPath= [
// 	{
// 	  index:true,
// 	  element:<AdminDashboard/>

// 	},
// 	{
// 	  path: 'dashboard',
// 	  element:<AdminDashboard/>

// 	},
// 	{
// 	  path: 'create-admin',
// 	  element:<CreateAdmin/>

// 	},
// 	{
// 	  path: 'create-faculty',
// 	  element:<CreateFaculty/>

// 	},

// 	{
// 	  path: 'create-student',
// 	  element:<CreateStudent/>
// 	}
// ]


