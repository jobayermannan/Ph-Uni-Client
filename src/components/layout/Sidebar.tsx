import { Layout, Menu } from "antd";
import { AdminRoutes } from "../../routes/admin.routes";
import { sidebarItemGenerator } from "../../utils/sidebarItmesGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.routes";


const {Sider} =Layout

const userRole ={
	ADMIN : "admin",
	FACULTY : "faculty",
	STUDENT : "student"
}



const SidebarItem = () => {


	const role ="student"
  
	let sidebarItems;

	switch (role) {
		case userRole.ADMIN :
		 sidebarItems=sidebarItemGenerator(AdminRoutes,userRole.ADMIN)
			
			break;
		case userRole.FACULTY :
		 sidebarItems=sidebarItemGenerator(facultyPaths,userRole.FACULTY)
			
			break;
		case userRole.STUDENT :
		 sidebarItems=sidebarItemGenerator(studentPath,userRole.STUDENT)
			
			break;
	
		default:
			break;
	}

  return (
	 
	<Sider
		breakpoint="lg"
		collapsedWidth="0"
		onBreakpoint={(broken) => {
		  console.log(broken);
		}}
		onCollapse={(collapsed, type) => {
		  console.log(collapsed, type);
		}}
	 >
		<div style={{
			color:'white', textAlign:'center',
			 fontSize:'small', height:'4em',
			 display:'flex',justifyContent:'center',
			 alignItems:'center'

		}}>
			<h2>Ph-Uni</h2>
		</div>
		<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
	 </Sider>
			  
	 
  );
};

export default SidebarItem;