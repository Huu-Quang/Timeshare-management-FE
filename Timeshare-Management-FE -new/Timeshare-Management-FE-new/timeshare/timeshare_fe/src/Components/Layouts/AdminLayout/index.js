import React, { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { MdApartment } from "react-icons/md";

import { Layout, Menu, Button, theme } from "antd";
import TimeShareManagerPage from "../../../pages/Admin/timeshare-manager";
import UserManagerPage from "../../../pages/Admin/user-manager";
import { GlobalContext } from "../../../provide";
import { Link, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [keySelected, setKeySelected] = useState("1");
  const userContext = useContext(GlobalContext);
  const { setUserInformation, setIsLogin, userInformation } = userContext;

  const userRole =
    userInformation[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];

  const handleChangeMenuItem = (e) => {
    setKeySelected(e.key);
  };

  const handleLogout = () => {
    setUserInformation({});
    setIsLogin(false);
    navigate("/");
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ maxWidth: "300px", width: "300px", minWidth: "300px" }}
      >
        <div className="demo-logo-vertical" style={{ padding: "30px" }}>
          <div className="logoDiv">
            <h1
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MdApartment
                className="icon"
                style={{ color: "rgba(255, 255, 255, 0.65)" }}
              />
              Timeshare
            </h1>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleChangeMenuItem}
        >
          <Menu.Item key="1" icon={<VideoCameraOutlined />}>
            Timeshare Management
          </Menu.Item>
          {userRole === "ADMIN" && (
            <Menu.Item key="2" icon={<UserOutlined />}>
              User Management
            </Menu.Item>
          )}
          <Menu.Item
            key="logout"
            onClick={handleLogout}
            icon={<LogoutOutlined />}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {keySelected === "1" && <TimeShareManagerPage />}
          {keySelected === "2" && userRole === "ADMIN" && <UserManagerPage />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
