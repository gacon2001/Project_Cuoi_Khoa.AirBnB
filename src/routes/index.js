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
    path: "",
    component: lazy(() => import("containers/HomeTemplate/Home/home.js")),
  },
  {
    exact: false,
    path: "/signin-home",
    component: lazy(() => import("containers/HomeTemplate/SignInHome")),
  },
  {
    exact: false,
    path: "/signup-home",
    component: lazy(() => import("containers/HomeTemplate/SignUpHome")),
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
