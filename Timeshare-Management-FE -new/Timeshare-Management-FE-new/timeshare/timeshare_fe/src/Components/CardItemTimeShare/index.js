import React from "react";
import {
  CloseCircleOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./card-item-time-share.css";
import axios from "axios";
const { Meta } = Card;

const CardItemTimeShare = ({ data, setReload }) => {
  const navigate = useNavigate();

  const {
    timeshareId,
    timeshareName,
    image,
    price,
    address,
    detail,
    timeshareStatusId,
    placeId,
    confirmTimeshare,
    id,
    place,
  } = data;

  const handleShowDemo = () => {
    navigate("/timeshare-detail-demo", { state: data });
  };

  const handleUpdateTimeshare = async (status) => {
    try {
      const updateTimeshare = await axios.put(
        `/timeshare/UpdateTimeshare/${timeshareId}`,
        { ...data, timeshareStatusId: status }
      );
      if (
        updateTimeshare.status === 200 &&
        updateTimeshare.data.isSucceed &&
        updateTimeshare.data.message === "Update Timeshare successfully"
      ) {
        setReload(true);
        alert("Update this timeshare successfully");
      } else {
        alert("Can't update this timeshare");
      }
    } catch (e) {
      console.log("Can't update timeshare");
      alert("Can't update this timeshare");
    }
  };
  return (
    <Card
      className="card-item-time-share"
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://vietnamstaytravel.com/wp-content/uploads/2021/08/202108101050-image1.jpg"
        />
      }
      actions={[
        <CheckCircleOutlined
          key="accept"
          style={{ color: "green" }}
          onClick={() => handleUpdateTimeshare(2)}
        />,
        <CloseCircleOutlined
          key="decline"
          style={{ color: "red" }}
          onClick={() => handleUpdateTimeshare(3)}
        />,
        <InfoCircleOutlined
          key="info"
          style={{ color: "blue" }}
          onClick={handleShowDemo}
        />,
      ]}
    >
      <Meta
        avatar={
          <Avatar
            src={image || "https://api.dicebear.com/7.x/miniavs/svg?seed=8"}
          />
        }
        title={timeshareName}
        description={detail}
      />
    </Card>
  );
};
export default CardItemTimeShare;
