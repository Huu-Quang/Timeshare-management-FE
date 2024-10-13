import React, { useEffect, useState } from "react";
import { Select, Space, Table, Tag, Button } from "antd";
import { Modal, Form, Input } from "antd";
import axios from "axios";

const ModalEdit = ({ isModalOpen, setIsModalOpen, data, setReload }) => {
  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    password: "",
    email: "",
    phoneNumber: "",
    isActive: true,
  });

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    if (data) {
      setUserData({
        ...data,
        password: "", // Clear password field for security
      });
    }
  }, [data]);

  const handleUpdateUserData = async () => {
    try {
      const endpoint = data
        ? `/User/UpdateUser/${data.id}`
        : "/User/CreateUser";
      const response = await axios[data ? "put" : "post"](endpoint, userData);

      if (response.status === 200 && response.data.isSucceed) {
        alert(data ? "Update successful" : "Create successful");
        setReload(true);
        setIsModalOpen(false);
      } else {
        alert("Operation failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title={data ? "Update User" : "Create User"}
      visible={isModalOpen}
      onOk={handleUpdateUserData}
      onCancel={handleCancel}
    >
      <Form style={{ maxWidth: 600 }} layout="vertical" autoComplete="off">
        <Form.Item label="User Name">
          <Input
            value={userData.userName}
            onChange={handleChangeInput}
            name="userName"
          />
        </Form.Item>

        <Form.Item label="Name">
          <Input
            value={userData.name}
            onChange={handleChangeInput}
            name="name"
          />
        </Form.Item>

        <Form.Item label="Status">
          <Select
            onChange={(value) => setUserData({ ...userData, isActive: value })}
            value={userData.isActive}
          >
            <Select.Option value={true}>Active</Select.Option>
            <Select.Option value={false}>Banned</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Email">
          <Input
            value={userData.email}
            onChange={handleChangeInput}
            name="email"
          />
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input
            value={userData.phoneNumber}
            onChange={handleChangeInput}
            name="phoneNumber"
          />
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            value={userData.password}
            onChange={handleChangeInput}
            name="password"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const TableUserManagement = () => {
  const [reload, setReload] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      width: "30%",
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
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (status) => {
        let title = status === true ? "Active" : "Banned";
        let bgColor = status === true ? "green" : "volcano";
        let key = status;
        return (
          <Tag color={bgColor} key={key}>
            {title.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsModalOpen(true);
              setSelectedItem(record);
            }}
          >
            Edit
          </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const handleFetchData = async () => {
    try {
      const response = await axios.get("/User/GetAllUser");
      if (response.status === 200 && response.data.isSucceed) {
        setData(response.data.result);
      } else {
        console.error("Can't fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (reload) {
      handleFetchData();
      let timeout = setTimeout(() => {
        setReload(false);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [reload]);

  return (
    <>
      <Button
        onClick={() => {
          setIsModalOpen(true);
          setSelectedItem(null);
        }}
      >
        Create User
      </Button>
      <Table columns={columns} dataSource={data} />
      <ModalEdit
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={selectedItem}
        setReload={setReload}
      />
    </>
  );
};

export default TableUserManagement;
