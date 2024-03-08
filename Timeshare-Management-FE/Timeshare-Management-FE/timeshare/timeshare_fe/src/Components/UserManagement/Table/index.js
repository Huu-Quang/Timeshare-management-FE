import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email Address",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    userName: "John Brown",
    email: 32,
    phoneNumber: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    userName: "Jim Green",
    email: 42,
    phoneNumber: "London No. 1 Lake Park",
  },
  {
    key: "3",
    userName: "Joe Black",
    email: 32,
    phoneNumber: "Sydney No. 1 Lake Park",
  },
];
const TableUserManagement = () => <Table columns={columns} dataSource={data} />;
export default TableUserManagement;
