import React, { useEffect, useState } from "react";
import "./main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = ({ filteredData, currentPage, pageSize, userInformation }) => {
  const navigate = useNavigate();
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          TOP HOMESTAY
        </h3>
      </div>

      <div className="secContent grid">
        {filteredData
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map(
            ({
              timeshareId,
              image,
              timeshareName,
              address,
              grade = 100,
              price,
              detail,
              userBooked,
            }) => {
              return (
                <div
                  key={timeshareId}
                  data-aos="fade-up"
                  className="singleDestination"
                >
                  <div className="new-ribbon secondary">${price}</div>
                  <div className="imageDiv">
                    <img
                      src={
                        image && image != "string"
                          ? image
                          : "https://www.cet.edu.vn/wp-content/uploads/2019/03/tinh-hinh-timeshare-tai-viet-nam.jpg"
                      }
                      alt={timeshareName}
                    />
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
                          <IoHeart
                            style={{ fontSize: "1.8rem", color: "red" }}
                          />
                          {grade}
                        </span>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{detail}</p>
                    </div>

                    {userBooked ? (
                      <div className="fees flex">
                        <button
                          className="btn flex"
                          style={{
                            backgroundColor: "#f44336",
                            cursor: "not-allowed",
                          }}
                        >
                          You already booked this time share
                        </button>
                      </div>
                    ) : (
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
                    )}
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
