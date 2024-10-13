import React, { useContext, useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";
import { GlobalContext } from "../../provide";
import { formatDate } from "../../Components/helpers";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const data1 = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const HistoryPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const userContext = useContext(GlobalContext);
  const { userInformation } = userContext;
  const handleFetchData = async () => {
    if (data.length === 1) {
      setData([]);
      return;
    }
    try {
      const getBookingDetail = await axios.get(
        `/BookingRequest/GetBookingByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
      );
      if (
        getBookingDetail.status === 200 &&
        getBookingDetail.data.isSucceed &&
        getBookingDetail.data.message === "Timeshares retrieved successfully."
      ) {
        let bookings = getBookingDetail.data?.result;
        setData(bookings);
      }
    } catch (err) {
      console.log("Can't get booking request");
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "bookingRequestId",
      key: "bookingRequestId",
      render: (text) => <p style={{ fontWeight: 600 }}>{text}</p>,
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDate",
      key: "bookingDate",
      render: (text) => <p>{formatDate(text)}</p>,
    },
    {
      title: "TimeShare Id",
      dataIndex: "timeshareId",
      key: "timeshareId",
      render: (text) => (
        <a
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => navigate(`/timeshare-detail/${text}`)}
        >
          {text} <EyeOutlined style={{ marginLeft: "8px" }} />
        </a>
      ),
    },
    {
      title: "Booking Status",
      key: "timeshareStatusId",
      dataIndex: "timeshareStatusId",
      render: (status) => (
        <>
          {status === 1 ? (
            <Tag color={"yellow"}>Pending</Tag>
          ) : status === 2 ? (
            <Tag color={"green"}>Accept</Tag>
          ) : (
            <Tag color={"volcano"}>Decline</Tag>
          )}
        </>
      ),
    },
  ];

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <div style={{ margin: "3% 3% 0" }}>
      <h1 style={{ marginBottom: "1%" }}>Booking History</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default HistoryPage;
