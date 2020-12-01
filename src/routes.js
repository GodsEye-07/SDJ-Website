/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import UserPage from "views/AbousUs.js";
import userProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Shop with us",
    icon: "nc-icon nc-diamond",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Daily Rates",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: userProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Your Orders",
    icon: "nc-icon nc-bag-16",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "About Us",
    icon: "nc-icon nc-bank",
    component: UserPage,
    layout: "/admin",
  },
];
export default routes;
