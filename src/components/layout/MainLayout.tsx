import { Layout } from 'antd';


import { Outlet } from 'react-router-dom';

import { Content, Header } from 'antd/es/layout/layout';

import SidebarItem from './Sidebar';


const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <SidebarItem />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;









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

