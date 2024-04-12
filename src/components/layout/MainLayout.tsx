import { Layout, Menu, MenuProps, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {  createElement } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.routes';


const { Header, Content, Footer, Sider } = Layout;

// const items:MenuProps["items"] = [
// 	{
// 		key: 'dashboard',
// 		label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
// 	},
// 	{
// 		key: '2',
// 		label:'Profile'
// 	},
// 	{
// 		key: "user-management",
// 		label: 'User Management',
// 		children:[
// 			{
// 				key: 'create-admin',
// 				label: <NavLink to="/admin/create-admin">CreateAdmin</NavLink>
// 			},
// 			{
// 				key: 'create-faculty',
// 				label: <NavLink to="/admin/create-faculty">CreateFaculty</NavLink>
// 			},
// 			{
// 				key: 'create-student',
// 				label: <NavLink to="/admin/create-student">CreateStudent</NavLink>
// 			},
// 		]
// 	}
// ]

const MainLayout = () => {
  return (
	 <div>   <Layout
	 style={{height:'100vh'}}
	 >
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
		<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
	 </Sider>
	 <Layout>
		<Header style={{ padding: 0, }} />
		<Content style={{ margin: '24px 16px 0' }}>
		  <div
			 style={{
				padding: 24,
				minHeight: 360,
			
			 }}
		  >
		        <Outlet></Outlet>
		  </div>
		</Content>
		<Footer style={{ textAlign: 'center' }}>
		  Ant Design ©{new Date().getFullYear()} Created by Ant UED
		</Footer>
	 </Layout>
  </Layout>
	 </div>
  )
}

export default MainLayout
