import { useEffect, useState } from "react";
import CardItemTimeShare from "../../Components/CardItemTimeShare";
import axios from "axios";
//api manage timeshare
function TimeShareManagerPage() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const handleFetchData = async () => {
    if (data.length === 1) {
      setData([])
      return
    }
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
        console.log(mergedObjects);
        setData(mergedObjects);
      } else {
        console.log(1);
        console.log("Can't get timeshare");
      }
    } catch (err) {
      console.log(2);

      console.log("Can't get timeshare");
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
  return (
    <>
      <div
        className="timeshare-owner-management"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          gap: "30px",
          marginTop: "2%",
        }}
      >
        {data.length ? (
          data.map((timeshare, index) => {
            return (
              <CardItemTimeShare
                key={index}
                data={timeshare}
                setReload={setReload}
              />
            );
          })
        ) : (
          <h3>List Timeshare </h3>
        )}
      </div>
    </>
  );
}

export default TimeShareManagerPage;
