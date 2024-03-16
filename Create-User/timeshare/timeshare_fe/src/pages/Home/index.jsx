import { useContext, useEffect, useState } from "react";
import Filters from "./Filters";
import Main from "./Main";
import axios from "axios";
import Aos from "aos";
import { GlobalContext } from "../../provide";

function HomePage() {
  const [filters, setFilters] = useState({
    timeshareName: "",
    publicDate: "",
    maxPrice: 0,
  });

  const userContext = useContext(GlobalContext);
  const { isLogin, userInformation } = userContext;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data || []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 1000;

  const handleFetchData = async () => {
    try {
      const [getTimeShare, getPlace, getTimeShareStatus, checkUserBooked] =
        await Promise.all([
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
        let mergedObjects = timeshares.map((timeshare) => {
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
        if (
          isLogin &&
          userInformation[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
          ] &&
          userInformation[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ] === "USER"
        ) {
          const checkUserBooked = await axios.get(
            `BookingRequest/GetBookingByUserId/${userInformation["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
          );
          if (
            checkUserBooked.status === 200 &&
            checkUserBooked.data.isSucceed &&
            checkUserBooked.data.message ===
              "Timeshares retrieved successfully."
          ) {
            let checkUserBookedInSuccess = checkUserBooked.data.result;
            const timeshareIdsBooked = new Set(
              checkUserBookedInSuccess.map((item) => item.timeshareId)
            );

            mergedObjects = mergedObjects.map((item) => {
              if (timeshareIdsBooked.has(item.timeshareId)) {
                return { ...item, userBooked: true };
              } else {
                return { ...item, userBooked: false };
              }
            });
          }
        }
        setData(mergedObjects);
      } else {
        console.log("Can't get time share");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (filters) => {
    let newData = data.filter((timeshare) => {
      if (
        filters.timeshareName &&
        !timeshare.timeshareName
          .toLowerCase()
          .includes(filters.timeshareName.toLowerCase())
      ) {
        return false;
      }
      if (filters.publicDate) {
        const publicDateYYMMDD = timeshare.publicDate.slice(0, 10);
        if (filters.publicDate !== publicDateYYMMDD) {
          return false;
        }
      }
      if (filters.maxPrice && timeshare.price > filters.maxPrice) {
        return false;
      }
      return true;
    });
    if (filters.maxPrice === "0") {
      newData = [...data];
    }
    setFilteredData(newData);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    handleFetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);
  return (
    <>
      <Filters
        filters={filters}
        setFilters={setFilters}
        handleFilterChange={handleFilterChange}
      />
      <Main
        filteredData={filteredData}
        currentPage={currentPage}
        pageSize={pageSize}
        userInformation={userInformation}
      />
    </>
  );
}

export default HomePage;
