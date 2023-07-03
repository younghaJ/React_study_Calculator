import { AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Calculator from "./Calculator";
import Home from "./Home";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "gray",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  color: "#fff",
  backgroundColor: "#9999",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to="/">Home</Link>, "1"),
  getItem("기능", "2", <AppstoreOutlined />, [
    getItem(<Link to="/Calculator">계산기</Link>, "sub1"),
    getItem("추가", "sub2"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

function App() {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
        height: "10px"
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>
          <h1>React 실습예제</h1>
        </Header>

        <Layout hasSider style={{height:"100%"}}>
          <Sider 
            style={siderStyle} 
            width={"20%"}
            >
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{
                width: "100%",
                backgroundColor: "#7b83d4",
                color: "white",
              }}
              items={items}
            />
          </Sider>
          <Content style={contentStyle}>
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Calculator" element={<Calculator />} />
              </Routes>
            </div>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
}

export default App;
