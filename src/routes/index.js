import { lazy } from "react";
import AdminTemplate from "containers/AdminTemplate/mainAdmin";
import HomeTemplate from "containers/HomeTemplate/mainHome";

const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    component: lazy(() => import("containers/AdminTemplate/SignInAd")),
  },
  {
    exact: false,
    path: "/signin-admin",
    component: lazy(() => import("containers/AdminTemplate/SignInAd")),
  },
  {
    exact: false,
    path: "/detail-admin-signin/:_id",
    component: lazy(() => import("containers/AdminTemplate/DetailAdminSignin")),
  },
  {
    exact: false,
    path: "/list-user",
    component: lazy(() => import("containers/AdminTemplate/ListUser")),
  },
  {
    exact: false,
    path: "/edit-user/:_id",
    component: lazy(() => import("containers/AdminTemplate/EditUserAdmin")),
  },
  {
    exact: false,
    path: "/add-user-admin",
    component: lazy(() => import("containers/AdminTemplate/AddUserAdmin")),
  },
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("containers/AdminTemplate/Dashboard")),
  },
  {
    exact: false,
    path: "/add-room",
    component: lazy(() => import("containers/AdminTemplate/AddRoom")),
  },
  {
    exact: false,
    path: "/list-rooms/:_id",
    component: lazy(() => import("containers/AdminTemplate/ListRoomById")),
  },
  {
    exact: false,
    path: "/manage-locations-and-rooms",
    component: lazy(() => import("containers/AdminTemplate/ManageLocationAndRoom")),
  },
  {
    exact: false,
    path: "/add-location",
    component: lazy(() => import("containers/AdminTemplate/AddLocation")),
  },
  {
    exact: false,
    path: "/edit-location/:_id",
    component: lazy(() => import("containers/AdminTemplate/EditLocation")),
  },
  {
    exact: false,
    path: "/edit-room/:_id",
    component: lazy(() => import("containers/AdminTemplate/EditRoom")),
  },
  {
    exact: false,
    path: "/detail-room-admin/:_id",
    component: lazy(() => import("containers/AdminTemplate/DetailRoomAdmin")),
  },
  {
    exact: false,
    path: "/add-evaluate/:_id",
    component: lazy(() => import("containers/AdminTemplate/AddEvaluate")),
  },
  {
    exact: false,
    path: "/edit-evaluate/:_id",
    component: lazy(() => import("containers/AdminTemplate/EditEvaluate")),
  },
];
const renderRoutesAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("containers/HomeTemplate/Home/home.js")),
  },
  // {
  //   exact: false,
  //   path: "/signin-home",
  //   component: lazy(() => import("containers/HomeTemplate/SignInHome")),
  // },
  // {
  //   exact: false,
  //   path: "/signup-home",
  //   component: lazy(() => import("containers/HomeTemplate/SignUpHome")),
  // },
  {
    exact: false,
    path: "/detail-location/:_id",
    component: lazy(() => import("containers/HomeTemplate/DetailLocation")),
  },
  {
    exact: false,
    path: "/list-rooms-for-rent-by-id/:_id",
    component: lazy(() => import("containers/HomeTemplate/ListRoomsForRentByID")),
  },
  {
    exact: false,
    path: "/detail-room/:_id",
    component: lazy(() => import("containers/HomeTemplate/DetailRoom")),
  },
];
const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRoutesAdmin, renderRoutesHome };
