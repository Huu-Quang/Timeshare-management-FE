import React, { useEffect, useState } from "react";
import { Select, Space, Table, Tag } from "antd";
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
    const target = e.target;
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  useEffect(() => {
    if (data) {
      setUserData({
        id: data.id,
        name: data.name,
        userName: data.userName,
        password: "",
        email: data.email,
        phoneNumber: data.phoneNumber,
        isActive: data.isActive,
      });
    }
  }, [data]);

  const handleUpdateUserData = async () => {
    try {
      const updateUser = await axios.put(
        `/User/UpdateUser/${data.id}`,
        userData
      );
      if (
        updateUser.status === 200 &&
        updateUser.data.isSucceed &&
        updateUser.data.message === "Update User successfully"
      ) {
        alert("Updated successfully");
        setReload(true);
        setIsModalOpen(false);
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error(error);
    }
  };


 


  const handleChangeSelect = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <Modal
        title="Update User"
        open={isModalOpen}
        onOk={handleUpdateUserData}
        onCancel={handleCancel}
      >
        <Form
          name="trigger"
          style={{
            maxWidth: 600,
          }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item label="User Name">
            <Input
              value={userData?.userName}
              onChange={handleChangeInput}
              name="userName"
            />
          </Form.Item>

          <Form.Item label="Name">
            <Input
              value={userData?.name}
              onChange={handleChangeInput}
              name="name"
            />
          </Form.Item>
          <Form.Item label="Status">
            <Select
              onChange={(value) => handleChangeSelect("isActive", value)}
              value={userData?.isActive}
              name="isActive"
            >
              <Select.Option value={true}>Active</Select.Option>
              <Select.Option value={false}>Banned</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Email">
            <Input
              value={userData?.email}
              onChange={handleChangeInput}
              name="email"
            />
          </Form.Item>

          <Form.Item label="Phone Number">
            <Input
              value={userData?.phoneNumber}
              onChange={handleChangeInput}
              name="phoneNumber"
            />
          </Form.Item>

          <Form.Item label="Password">
            <Input
              value={userData?.password}
              onChange={handleChangeInput}
              name="password"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
const TableUserManagement = () => {
  const [reload, setReload] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(`/User/DeleteUser/${id}`);
      if (response.status === 200) {
        alert('Deleted successfully');
        handleFetchData();
      } else {
        alert('Delete failed');
      }
    } catch (error) {
      console.error(error);
    }
  };


  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      filterMode: "tree",
      filterSearch: true,
      filters: [
        {
          text: "testCreate",
          value: "testCreate",
        },
        {
          text: "testActive",
          value: "testActive",
        },
        {
          text: "admin",
          value: "admin",
        },
        {
          text: "staff",
          value: "staff",
        },
        {
          text: "owner",
          value: "owner",
        },
        {
          text: "user",
          value: "user",
        },
      ],
      onFilter: (value, record) => record.name.startsWith(value),
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
          <a onClick={() => handleDeleteUser(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  const handleFetchData = async () => {
    try {
      const getUsers = await axios.get("/User/GetAllUser");
      if (
        getUsers.status === 200 &&
        getUsers.data.isSucceed === true &&
        getUsers.data.message === "User retrived successfully."
      ) {
        const userData = getUsers.data.result;
        setData(userData);
      } else {
        console.error("Can't fetch data");
      }
    } catch (e) {
      console.error(e);
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
