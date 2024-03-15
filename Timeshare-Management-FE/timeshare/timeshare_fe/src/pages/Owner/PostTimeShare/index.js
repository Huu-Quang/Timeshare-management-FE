import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../provide";

function PostTimeSharePage() {
  const navigation = useNavigate();

  const userContext = useContext(GlobalContext);
  const { isLogin, userInformation } = userContext;

  const [data, setData] = useState({
    timeshareName: "",
    placeId: "",
    address: "",
    price: "",
    detail: "",
    publicDate: "",
    image:
      "https://vietnamstaytravel.com/wp-content/uploads/2021/08/202108101050-image1.jpg",
    timeshareStatusId: 0,
    id: userInformation[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ],
  });
  const [errors, setErrors] = useState({});
  const [places, setPlaces] = useState([]);

  const handleCreateTimeShare = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        const createTimeshare = await axios.post("/timeshare/CreateTimeshare", {
          ...data,
          placeId: parseInt(data.placeId),
        });
        if (
          createTimeshare.status === 200 &&
          createTimeshare.data.isSucceed &&
          createTimeshare.data.message ===
            "Create Timeshare successfully. Awaiting confirmation."
        ) {
          alert(createTimeshare.data.message);
          navigation("/");
        } else {
          console.log("Can't create Timeshare");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (data.placeId === "false") {
      formIsValid = false;
      errors["placeId"] = "Please enter placeId";
    }

    if (!data.price) {
      formIsValid = false;
      errors["price"] = "Please enter price";
    }

    if (!data.address) {
      formIsValid = false;
      errors["address"] = "Please enter address";
    }

    if (!data.timeshareName) {
      formIsValid = false;
      errors["timeshareName"] = "Please enter timeshareName";
    }

    if (!data.detail) {
      formIsValid = false;
      errors["detail"] = "Please enter detail";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleFetchData = async () => {
    try {
      const getPlace = await axios.get("/Place/GetAllPlace");
      if (
        getPlace.status === 200 &&
        getPlace.data.isSucceed &&
        getPlace.data.message === "Place retrived successfully."
      ) {
        let placesData = getPlace.data?.result;
        setPlaces(placesData);
      } else {
        console.log("Can't get place");
      }
    } catch (err) {
      console.log("Can't get place");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <div className={"registersform"}>
        <div className="flexsForm">
          <h1>Create Time Share</h1>
          <div className="dividerSocial"></div>
          <form>
            <div className="textField">
              <label>Time Share Name</label>
              <input
                onChange={(e) => {
                  setData({ ...data, timeshareName: e.target.value });
                }}
              />
              <span className="error">{errors["timeshareName"]}</span>
            </div>
            <div className="textField">
              <label>Place</label>
              <select
                onChange={(e) => {
                  setData({ ...data, placeId: e.target.value });
                }}
                value={data.placeId}
              >
                <option defaultChecked value={false}>
                  Select your place
                </option>
                {places?.map((item) => (
                  <option value={item.placeId}>{item.placeName}</option>
                ))}
              </select>
              {/* <input
                onChange={(e) => {
                  setData({ ...data, placeId: e.target.value });
                }}
              /> */}
              <span className="error">{errors["placeId"]}</span>
            </div>
            <div className="textField">
              <label>Address</label>
              <input
                onChange={(e) => {
                  setData({ ...data, address: e.target.value });
                }}
              />
              <span className="error">{errors["address"]}</span>
            </div>
            <div className="textField">
              <label>Price</label>
              <input
                type="number"
                onChange={(e) => {
                  setData({ ...data, price: e.target.value });
                }}
              />
              <span className="error">{errors["price"]}</span>
            </div>
            <div className="textField">
              <label>Public Date</label>
              <input
                type="date"
                onChange={(e) => {
                  setData({ ...data, publicDate: e.target.value });
                }}
              />
              <span className="error">{errors["price"]}</span>
            </div>
            <div className="textField">
              <label>Detail</label>
              <textarea
                type="text"
                style={{ height: "150px" }}
                pattern="[0-9]*"
                onChange={(e) => {
                  const value = e.target.value;
                  setData({
                    ...data,
                    detail: value,
                  });
                }}
              />
              <span className="error">{errors["detail"]}</span>
            </div>
            <button onClick={(e) => handleCreateTimeShare(e)}>Create</button>
          </form>
        </div>
        <span className="divider"></span>
        <div className="loginsForm">
          <h3>Add Image Time Share</h3>
          <Link to={"/login"}>
            <button className="registerButton">Add here</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PostTimeSharePage;
