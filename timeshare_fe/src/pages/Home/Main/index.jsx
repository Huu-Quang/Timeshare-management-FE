import React, { useEffect, useState } from "react";
import "./main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleFetchData = async () => {
    try {
      const [getTimeShare, getPlace, getTimeShareStatus] = await Promise.all([
        axios.get("/timeshare/GetAllActiveTimeshares"),
        axios.get("/Place/GetAllPlace"),
        axios.get("/TimeshareStatus/GetAllTimeshareStatus"),
      ]);
      if (
        getTimeShare.status === 200 &&
        getTimeShare.data.isSucceed &&
        getTimeShare.data.message ===
          "Active Timeshares retrieved successfully." &&
        getPlace.status === 200 &&
        getPlace.data.isSucceed &&
        getPlace.data.message === "Place retrived successfully." &&
        getTimeShareStatus.status === 200 &&
        getTimeShareStatus.data.isSucceed &&
        getTimeShareStatus.data.message ===
          "Timeshare status retrived successfully."
      ) {
        let timeshares = getTimeShare.data?.result;
        let places = getPlace.data?.result;
        let timeshareStatuses = getTimeShareStatus.data?.result;
        const mergedObjects = timeshares.map((timeshare) => {
          const place = places.find(
            (place) => place.placeId === timeshare.placeId
          );
          const timeshareStatus = timeshareStatuses.find(
            (status) => status.timeshareStatusId === timeshare.timeshareStatusId
          );

          return {
            ...timeshare,
            place,
            timeshareStatus,
          };
        });

        setData(mergedObjects);
      } else {
        console.log("Can't get time share");
      }
    } catch (err) {
      console.log("Can't get time share");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    handleFetchData();
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          TOP HOMESTAY
        </h3>
      </div>

      <div className="secContent grid">
        {}
        {data.map(
          ({
            timeshareId,
            image,
            timeshareName,
            address,
            grade = 100,
            price,
            detail,
          }) => {
            return (
              <div
                key={timeshareId}
                data-aos="fade-up"
                className="singleDestination"
              >
                <div className="new-ribbon secondary">${price}</div>
                <div className="imageDiv">
                  <img src={image} alt={timeshareName} />
                </div>

                <div className="cardInfo">
                  <div className="cardBody-title">
                    <div>
                      <h1 className="destTitle">{timeshareName}</h1>
                      <span className="continent flex">
                        <IoLocationOutline className="icon" />
                        <span className="name">{address}</span>
                      </span>
                    </div>
                    <div className="grade">
                      <span style={{ fontSize: "0.85rem" }}>
                        <IoHeart style={{ fontSize: "1.8rem", color: "red" }} />
                        {grade}
                      </span>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{detail}</p>
                  </div>

                  <div className="fees flex">
                    <button
                      className="btn flex"
                      onClick={() => {
                        navigate(`/timeshare-detail/${timeshareId}`);
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Main;
