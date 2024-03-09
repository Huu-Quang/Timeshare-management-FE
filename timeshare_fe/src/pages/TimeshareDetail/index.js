import "./timeshare-detail.css";
import { FaBed, FaBath, FaUtensils } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { FaInfoCircle, FaRegMoneyBillAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../provide";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function TimeShareDetailPage() {
  const userContext = useContext(GlobalContext);
  const { isLogin, userInformation } = userContext;
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  console.log(data);

  const { timeshareId, image, timeshareName, address, price, detail, place } =
    data;

  const handleFetchData = async () => {
    if (id) {
      try {
        const [getTimeShare, getPlace, getTimeShareStatus] = await Promise.all([
          axios.get(`/timeshare/GetTimeshareById/${id}`),
          axios.get("/Place/GetAllPlace"),
          axios.get("/TimeshareStatus/GetAllTimeshareStatus"),
        ]);
        if (
          getTimeShare.status === 200 &&
          getTimeShare.data.isSucceed &&
          getTimeShare.data.message === "Timeshare retrieved successfully." &&
          getPlace.status === 200 &&
          getPlace.data.isSucceed &&
          getPlace.data.message === "Place retrived successfully." &&
          getTimeShareStatus.status === 200 &&
          getTimeShareStatus.data.isSucceed &&
          getTimeShareStatus.data.message ===
            "Timeshare status retrived successfully."
        ) {
          let timeshare = getTimeShare.data?.result;
          let places = getPlace.data?.result;
          let timeshareStatuses = getTimeShareStatus.data?.result;
          const mergedObjects = {
            ...timeshare,
            place: places.find((place) => place.placeId === timeshare.placeId),
            timeshareStatuse: timeshareStatuses.find(
              (status) =>
                status.timeshareStatusId === timeshare.timeshareStatusId
            ),
          };
          setData(mergedObjects);
        } else {
          console.log("Can't get time share");
        }
      } catch (err) {
        console.log("Can't get time share");
      }
    } else {
      setData(location.state);
    }
  };

  const handleBookTimeShare = async () => {
    if (!isLogin) {
      alert("You must be a user to request a book time share");
      navigate("/register");
    } else {
      let payload = {
        bookingDate: new Date().toISOString(),
        timeshareId: timeshareId,
        id: userInformation[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ],
      };
      try {
        const requestTimeShare = await axios.post(
          `/BookingRequest/CreateBookingRequest`,
          payload
        );
        if (
          requestTimeShare.status === 200 &&
          requestTimeShare.data.isSucceed &&
          requestTimeShare.data.message === "Booking created successfully"
        ) {
          alert(requestTimeShare.data.message);
          navigate("/");
        } else {
          alert("Can't booking this timeshare");
        }
      } catch (e) {
        alert("Can't booking this timeshare");
      }
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <>
      <div className="main-information">
        <div className="main-left">
          <div className="rental-card">
            <div className="rental-card-header">
              <div className="resort-image image image-tilt_left hide-for-small-only ">
                <div
                  className="resort-frame-image background-cover"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </div>
              <div className="timeshare-title">
                <h3>{place?.placeName}</h3>
                <h2 className="timeshare-details-title">{timeshareName}</h2>
                <h4>{address}</h4>
              </div>
            </div>

            <div className="rental-info">
              <div>
                <div className="info-section d-flex">
                  <FaBed className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>3 Bedrooms</p>
                    <p>Sleeps 8</p>
                    <p>Beds: 3 King, 1 Sofa bed</p>
                  </div>
                </div>
                <div className="info-section d-flex">
                  <FaBath className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>2 Bathrooms</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="info-section d-flex">
                  <GiFamilyHouse className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>3 Bedroom Villa</p>
                    <p>Building/Unit: Unassigned</p>
                    <p>View: Oceanfront</p>
                  </div>
                </div>
                <div className="info-section d-flex">
                  <FaUtensils className="icon" />
                  <div
                    style={{
                      padding: "0 0.7142857143rem 1.4285714286rem",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontFamily: '"Roboto",Helvetica,Arial,sans-serif',
                    }}
                  >
                    <p>Full kitchen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///tabs */}
          <dl className="tabs">
            <dd id="resortInfoTabHeader" className="">
              <a
                href="/posting/R1171762/resort-info"
                data-select-tab="resortInfo"
              >
                About the TimeShare
              </a>
            </dd>
          </dl>
          {/* /// */}
          <div className="member-info-container">
            <div className="rental-card-detail">
              <div className="rental-card-header">
                <div
                  className="resort-image image image-tilt_left hide-for-small-only "
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    minWidth: "11rem",
                    minHeight: "11rem",
                    height: "11.214286 rem",
                    width: "11.071429 rem",
                    top: 0,
                    left: 0,
                  }}
                >
                  <div
                    className="resort-frame-image background-cover"
                    style={{
                      backgroundImage: `url(${image})`,
                      height: "11rem",
                    }}
                  ></div>
                </div>
                <div
                  className="timeshare-title"
                  style={{ textAlign: "left", marginLeft: "20px" }}
                >
                  <h3 className="timeshare-details-title">{timeshareName}</h3>
                  <h5>{address}</h5>
                  <h4>{detail}</h4>
                </div>
              </div>
            </div>
            {!isLogin ? (
              <>
                <div className="member-info-alert">
                  <FaInfoCircle size={24} className="info-icon" />
                  <span>
                    Contact information and additional posting details available
                    to TimeShare Members only
                  </span>
                </div>
                <button
                  className="btn-member"
                  onClick={() => navigate("/register")}
                >
                  BECOME A MEMBER
                </button>
                <div className="member-info-login">
                  Already registered? <a href="/login">Sign in »</a>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className="main-right">
          <div className="booking-card">
            <div className="price-info">
              <FaRegMoneyBillAlt className="money-icon" />
              <span className="price">${price}</span>
            </div>
            <button className="btn-request" onClick={handleBookTimeShare}>
              {!isLogin ? "NEED BECOME A MEMBER" : "REQUEST TO BOOK"}
            </button>
            <hr />
            <div className="poster-info">
              <div className="poster-avatar">KC</div>
              <div className="poster-details">
                <span className="poster-name">Posted by Kim C.</span>
                <span className="member-since">Member since 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeShareDetailPage;
