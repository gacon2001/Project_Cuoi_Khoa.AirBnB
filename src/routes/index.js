import { lazy } from "react";
import AdminTemplate from "containers/AdminTemplate/mainAdmin";
import HomeTemplate from "containers/HomeTemplate/mainHome";

const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    component: lazy(() => import("containers/AdminTemplate/SignInPage")),
  },
  {
    exact: false,
    path: "/signin",
    component: lazy(() => import("containers/AdminTemplate/SignInPage")),
  },
  {
    exact: false,
    path: "/signup",
    component: lazy(() => import("containers/AdminTemplate/SignUpPage")),
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
    // {
    //   exact: true,
    //   path: "/home",
    //   component: lazy(() => import("containers/HomeTemplate")),
    // },
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

export {renderRoutesAdmin,renderRoutesHome}