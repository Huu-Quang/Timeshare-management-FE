// import { useContext, useEffect, useState } from "react";
// import "./timeshare-management.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { GlobalContext } from "../../../provide";
// import Search from "antd/es/input/Search";
// import PaginationCustom from "../../../Components/Painganation";

// const sample = {
//   timeshareId: 1,
//   image:
//     "https://vietnamstaytravel.com/wp-content/uploads/2021/08/202108101050-image1.jpg",
//   timeshareName: "Ha Long",
//   address: "Viet Nam",
//   price: 2000,
//   detail:
//     "Tọa lạc trên con đường vàng Trần Phú, phía trước là vịnh Nha Trang khách sạn PREMIER HAVANA Nha Trang là điểm nhấn độc đáo trong xu hướng nghỉ dưỡng đẳng cấp 5 sao Quốc tế tại Nha Trang nói riêng và tại Việt Nam nói chung. PREMIER HAVANA Nha Trang hiện là khách sạn quốc tế lớn nhất Việt Nam hiện nay với chiều cao 41 tầng và hơn 1.000 phòng lưu trú hướng biển. Khách sạn với đường hầm nối biển duy nhất tại Việt Nam. Từ sảnh khách sạn, Quý khách có thể tản bộ ra bờ biển bằng đường hầm riêng biệt nối liền từ khách sạn - một trong những nét chấm phá độc đáo nhất về thiết kế chỉ có thể tìm thấy ở PREMIER HAVANA Nha Trang.",
//   place: "Viet Nam",
// };
// function TimeShareManagePage() {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const userContext = useContext(GlobalContext);
//   const { isLogin, userInformation } = userContext;
//   const handleFetchData = async () => {
//     try {
//       const [getTimeShare, getPlace, getTimeShareStatus] = await Promise.all([
//         axios.get(
//           `/timeshare/GetTimeshareByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
//         ),
//         axios.get("/Place/GetAllPlace"),
//         axios.get("/TimeshareStatus/GetAllTimeshareStatus"),
//       ]);
//       if (
//         getTimeShare.status === 200 &&
//         getTimeShare.data.isSucceed &&
//         getTimeShare.data.message === "Timeshares retrieved successfully." &&
//         getPlace.status === 200 &&
//         getPlace.data.isSucceed &&
//         getPlace.data.message === "Place retrived successfully." &&
//         getTimeShareStatus.status === 200 &&
//         getTimeShareStatus.data.isSucceed &&
//         getTimeShareStatus.data.message ===
//           "Timeshare status retrived successfully."
//       ) {
//         let timeshares = getTimeShare.data?.result;
//         let places = getPlace.data?.result;
//         let timeshareStatuses = getTimeShareStatus.data?.result;
//         const mergedObjects = timeshares.map((timeshare) => {
//           const place = places.find(
//             (place) => place.placeId === timeshare.placeId
//           );
//           const timeshareStatus = timeshareStatuses.find(
//             (status) => status.timeshareStatusId === timeshare.timeshareStatusId
//           );

//           return {
//             ...timeshare,
//             place,
//             timeshareStatus,
//           };
//         });
//         console.log(mergedObjects);
//         setData(mergedObjects);
//       } else {
//         console.log(1);
//         console.log("Can't get time share");
//       }
//     } catch (err) {
//       console.log(2);

//       console.log("Can't get time share");
//     }
//   };

//   const [filteredData, setFilteredData] = useState(data || []);
//   const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 6;

//   const handleChangePage = (page) => {
//     setCurrentPage(page);
//   };

//   const handleFilterChange = (value, _e, info) => {
//     if (!value) {
//       setFilteredData(data);
//     } else {
//       const filtered = data.filter(
//         (item) =>
//           item.timeshareName.toLowerCase().indexOf(value.toLowerCase()) !== -1
//       );
//       setFilteredData(filtered);
//     }
//     setPagination({ ...pagination, current: 1 });
//   };

//   useEffect(() => {
//     handleFetchData();
//   }, []);

//   useEffect(() => {
//     if (data) {
//       setFilteredData(data);
//     }
//   }, [data]);
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Search
//           placeholder="Search with title..."
//           onSearch={handleFilterChange}
//           enterButton
//           style={{ maxWidth: "700px", marginTop: "2%" }}
//         />
//       </div>
//       <div
//         className="timeshare-owner-management"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "auto auto",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "30px",
//           marginTop: "2%",
//         }}
//       >
//         {filteredData
//           .slice((currentPage - 1) * pageSize, currentPage * pageSize)
//           .map((item, index) => {
//             const {
//               timeshareId,
//               image,
//               timeshareName,
//               address,
//               price,
//               detail,
//               place,
//               timeshareStatusId,
//             } = item;
//             return (
//               <div
//                 className="member-info-container"
//                 key={index}
//                 style={{ padding: "20px 20px 0", minWidth: "500px" }}
//               >
//                 <div className="rental-card-detail">
//                   <div className="rental-card-header">
//                     <div
//                       className="resort-image image image-tilt_left hide-for-small-only "
//                       style={{
//                         backgroundColor: "rgba(0,0,0,0.3)",
//                         minWidth: "11rem",
//                         minHeight: "11rem",
//                         height: "11.214286 rem",
//                         width: "11.071429 rem",
//                         top: 0,
//                         left: 0,
//                       }}
//                     >
//                       <div
//                         className="resort-frame-image background-cover"
//                         style={{
//                           backgroundImage: `url(${
//                             image && image != "string"
//                               ? image
//                               : "https://ezcloud.vn/wp-content/uploads/2019/12/timeshare.webp"
//                           })`,
//                           height: "11rem",
//                         }}
//                       ></div>
//                     </div>
//                     <div
//                       className="timeshare-title"
//                       style={{ textAlign: "left", marginLeft: "20px" }}
//                     >
//                       <h3 className="timeshare-details-title">
//                         {timeshareName}
//                       </h3>
//                       <h5>{price}$</h5>
//                       <h4>{detail}</h4>
//                       {timeshareStatusId === 2 ? (
//     <div>
//         <button
//             className="owner-management-button"
//             onClick={() =>
//                 navigate(`/timeshare-booking/${timeshareId}`)
//             }
//         >
//             SEE THE ORDER
//         </button>
//         <button
//             className="owner-management-button"
//             style={{ marginLeft: '10px' }}
//             onClick={() => {
//                 // Function to update the timeshare
//             }}
//         >
//             UPDATE
//         </button>
//     </div>
// ) : timeshareStatusId === 1 ? (
//                         <div
//                           style={{
//                             backgroundColor: "#feb600",
//                             width: "fit-content",
//                           }}
//                         >
//                           <h4>Waiting for the accept</h4>
//                         </div>
//                       ) : (
//                         <div
//                           style={{
//                             backgroundColor: "#f44336",
//                             width: "fit-content",
//                           }}
//                         >
//                           <h4>This is decline from the admin</h4>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginTop: "2%",
//         }}
//       >
//         <PaginationCustom
//           current={currentPage}
//           total={filteredData?.length}
//           pageSize={pageSize}
//           onChange={handleChangePage}
//         />
//       </div>
//     </>
//   );
// }

// export default TimeShareManagePage;



import { useContext, useEffect, useState } from "react";
import "./timeshare-management.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../provide";
import Search from "antd/es/input/Search";
import PaginationCustom from "../../../Components/Painganation";
import { Button, Form, Input, Modal, DatePicker } from "antd";


const sample = {
  timeshareId: 1,
  image:
    "https://vietnamstaytravel.com/wp-content/uploads/2021/08/202108101050-image1.jpg",
  timeshareName: "Ha Long",
  address: "Viet Nam",
  price: 2000,
  detail:
    "Tọa lạc trên con đường vàng Trần Phú, phía trước là vịnh Nha Trang khách sạn PREMIER HAVANA Nha Trang là điểm nhấn độc đáo trong xu hướng nghỉ dưỡng đẳng cấp 5 sao Quốc tế tại Nha Trang nói riêng và tại Việt Nam nói chung. PREMIER HAVANA Nha Trang hiện là khách sạn quốc tế lớn nhất Việt Nam hiện nay với chiều cao 41 tầng và hơn 1.000 phòng lưu trú hướng biển. Khách sạn với đường hầm nối biển duy nhất tại Việt Nam. Từ sảnh khách sạn, Quý khách có thể tản bộ ra bờ biển bằng đường hầm riêng biệt nối liền từ khách sạn - một trong những nét chấm phá độc đáo nhất về thiết kế chỉ có thể tìm thấy ở PREMIER HAVANA Nha Trang.",
  place: "Viet Nam",
};
function TimeShareManagePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updatingTimeshare, setUpdatingTimeshare] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const userContext = useContext(GlobalContext);
  const { isLogin, userInformation } = userContext;
  const handleFetchData = async () => {
    try {
      const [getTimeShare, getPlace, getTimeShareStatus] = await Promise.all([
        axios.get(
          `/timeshare/GetTimeshareByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
        ),
        axios.get("/Place/GetAllPlace"),
        axios.get("/TimeshareStatus/GetAllTimeshareStatus"),
      ]);
      if (
        getTimeShare.status === 200 &&
        getTimeShare.data.isSucceed &&
        getTimeShare.data.message === "Timeshares retrieved successfully." &&
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
        console.log(mergedObjects);
        setData(mergedObjects);
      } else {
        console.log(1);
        console.log("Can't get time share");
      }
    } catch (err) {
      console.log(2);

      console.log("Can't get time share");
    }
  };
  const showModal = (timeshare) => {
    form.setFieldsValue(timeshare);  // Set current values when modal is opened
    setIsModalVisible(true);
    setUpdatingTimeshare(timeshare);
  };
  
  const hideModal = () => {
    setIsModalVisible(false);
    setUpdatingTimeshare(null);
  };
  const handleUpdateClick = async () => {
    const { timeshareId, timeshareName, image, price, address, place, detail, publicDate } = form.getFieldsValue();
    const updateData = { timeshareId, timeshareName, image, price, address, place, detail, publicDate };
  
    try {
      const response = await axios.put(`/api/timeshare/UpdateTimeshare/${timeshareId}`, updateData);
  
      if (response.status === 200) {
        // Successful update, dismiss modal
        hideModal();
        // Fetch data again to refresh the page
        handleFetchData();
      } else {
        // If update wasn't successful, log error message
        console.error(response.message);
      }
    } catch (error) {
      console.error("An error occurred while updating the timeshare:", error);
    }
  };
  const [filteredData, setFilteredData] = useState(data || []);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (value, _e, info) => {
    if (!value) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item.timeshareName.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      setFilteredData(filtered);
    }
    setPagination({ ...pagination, current: 1 });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search
          placeholder="Search with title..."
          onSearch={handleFilterChange}
          enterButton
          style={{ maxWidth: "700px", marginTop: "2%" }}
        />
      </div>
      <div
        className="timeshare-owner-management"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginTop: "2%",
        }}
      >
        {filteredData
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((item, index) => {
            const {
              timeshareId,
              image,
              timeshareName,
              address,
              price,
              detail,
              place,
              timeshareStatusId,
            } = item;
            return (
              <div
                className="member-info-container"
                key={index}
                style={{ padding: "20px 20px 0", minWidth: "500px" }}
              >
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
                          backgroundImage: `url(${image && image != "string"
                              ? image
                              : "https://ezcloud.vn/wp-content/uploads/2019/12/timeshare.webp"
                            })`,
                          height: "11rem",
                        }}
                      ></div>
                    </div>
                    <div
                      className="timeshare-title"
                      style={{ textAlign: "left", marginLeft: "20px" }}
                    >
                      <h3 className="timeshare-details-title">
                        {timeshareName}
                      </h3>
                      <h5>{price}$</h5>
                      <h4>{detail}</h4>
                      {timeshareStatusId === 2 ? (
                        <div>
                          <button
                            className="owner-management-button"
                            onClick={() =>
                              navigate(`/timeshare-booking/${timeshareId}`)
                            }
                          >
                            SEE THE ORDER
                          </button>
                          <button
                            className="owner-management-button"
                            style={{ marginLeft: '10px' }}
                            onClick={() => showModal(item) }
                              // Function to update the timeshare
                            
                          >
                            UPDATE
                          </button>
                        </div>
                      ) : timeshareStatusId === 1 ? (
                        <div
                          style={{
                            backgroundColor: "#feb600",
                            width: "fit-content",
                          }}
                        >
                          <h4>Waiting for the accept</h4>
                        </div>
                      ) : (
                        <div
                          style={{
                            backgroundColor: "#f44336",
                            width: "fit-content",
                          }}
                        >
                          <h4>This is decline from the admin</h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  }}
>
  <PaginationCustom
    current={currentPage}
    total={filteredData?.length}
    pageSize={pageSize}
    onChange={handleChangePage}
  />
</div>
<Modal
  title="Update Timeshare"
  visible={isModalVisible}
  onOk={handleUpdateClick}
  onCancel={hideModal}
>
  <Form form={form} initialValues={{ ...updatingTimeshare }}>
    <Form.Item name="timeshareName" label="Timeshare Name">
      <Input />
    </Form.Item>
    <Form.Item name="image" label="Image URL">
      <Input />
    </Form.Item>
    <Form.Item name="price" label="Price">
      <Input />
    </Form.Item>
    <Form.Item name="address" label="Address">
      <Input />
    </Form.Item>
    <Form.Item name="place" label="Place">
      <Input />
    </Form.Item>
    <Form.Item name="detail" label="Detail">
      <Input.TextArea />
    </Form.Item>
  </Form>
</Modal>
</>
);
}



export default TimeShareManagePage;

