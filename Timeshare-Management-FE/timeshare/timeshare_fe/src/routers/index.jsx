import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomePage from "../pages/Home";
import ViewProfile from "../pages/ViewProfile";
import TimeShareManagerPage from "../pages/Admin/timeshare-manager";
import UserManagerPage from "../pages/Admin/user-manager";
import TimeShareDetailPage from "../pages/TimeshareDetail";
import FAQsPage from "../pages/Faqs";
import HistoryPage from "../pages/History";
import ListTimeSharePage from "../pages/ListTimeShare";
import PostTimeSharePage from "../pages/Owner/PostTimeShare";
import TimeShareManagePage from "../pages/Owner/TimeShareManage";
import TimeShareBookingPage from "../pages/Owner/TimeShareBooking";
import AdminLayout from "../Components/Layouts/AdminLayout";

const routers = [
  { path: "/", components: HomePage },
  { path: "/login", components: Login },
  { path: "/register", components: Register },
  { path: "/faqs", components: FAQsPage },
  { path: "/history", components: HistoryPage },
  { path: "/list-timeshare", components: ListTimeSharePage },
  { path: "/timeshare-detail/:id", components: TimeShareDetailPage },
  { path: "/view-profile", components: ViewProfile },
  { path: "/user-manager", components: UserManagerPage },
  { path: "/timeshare-manager", components: TimeShareManagerPage },

  //owner
  { path: "/post-timeshare", components: PostTimeSharePage },
  { path: "/timeshare-management", components: TimeShareManagePage },
  { path: "/timeshare-booking/:id", components: TimeShareBookingPage },

  //admin
  {
    path: "/admin",
    components: "",
    layout: AdminLayout,
  },
  {
    path: "/admin/user-manager",
    components: UserManagerPage,
    layout: AdminLayout,
  },
  { path: "/timeshare-detail-demo", components: TimeShareDetailPage },

  //staff
  {
    path: "/staff",
    components: "",
    layout: AdminLayout,
  },
];

export { routers };
