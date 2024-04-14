import { ReactNode } from "react";
import { TSidebarItem, TUserPath } from "../types";
import { NavLink } from "react-router-dom";






 export const sidebarItemGenerator=(items:TUserPath[],role:string) =>{

         

 const sidebarItems = items.reduce((acc:TSidebarItem[], item) => {
	if (item.path && item.element) {
	  acc.push({
		 key: item.path,
		 label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
	  });
	} 
	
	else if (item.children) {
	
		 acc.push({
			key: item.name,
			label:item.name,
			children:item.children.map((child)=>{
			  return {
				 key:child.name,
			  label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
			  }
			})
		 });
	  
	}
 
	return acc;
 }, []);

  return sidebarItems 

}