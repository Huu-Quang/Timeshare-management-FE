import { useEffect, useState } from "react";
import CardItemTimeShare from "../../Components/CardItemTimeShare";
import axios from "axios";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import Pagination from "../../Components/Painganation";
const { Search } = Input;

function TimeShareManagerPage() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [filteredData, setFilteredData] = useState(data || []);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

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

  const handleFetchData = async () => {
    try {
      const [getTimeShare, getPlace, getTimeShareStatus] = await Promise.all([
        axios.get("/timeshare/GetTimesharesByStatus/1"),
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
        setData(mergedObjects);
      } else {
        console.log(1);
        console.log("Can't get time share");
      }
    } catch (err) {
      console.log("Can't get time share");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (reload) handleFetchData();
    const clearTime = setTimeout(() => {
      setReload(false);
    }, 50);
    return () => {
      clearTimeout(clearTime);
    };
  }, [reload]);

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
          justifyContent: "space-between",
        }}
      >
        <Search
          placeholder="Search with title..."
          onSearch={handleFilterChange}
          enterButton
          style={{ maxWidth: "300px" }}
        />
        <Pagination
          current={currentPage}
          total={filteredData?.length}
          pageSize={pageSize}
          onChange={handleChangePage}
        />
      </div>
      <div
        className="timeshare-owner-management"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          justifyContent: "center",
          alignItems: "center",
          // justifyItems: "center",
          gap: "30px",
          marginTop: "2%",
        }}
      >
        {filteredData.length ? (
          filteredData
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((timeshare, index) => {
              return (
                <CardItemTimeShare
                  key={index}
                  data={timeshare}
                  setReload={setReload}
                />
              );
            })
        ) : (
          <h3>List Timeshare Empty</h3>
        )}
      </div>
    </>
  );
}

export default TimeShareManagerPage;
