import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardNavbar from "./Dashboard/components/DashboardNavbar";
import DashboardSidebar from "./Dashboard/components/DashboardSidebar";
import SignInAd from "./SignInAd";

export default function AdminTemplate({ exact, path, component }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  if (localStorage.getItem("Admin")) { 
    return (
      <>
        <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <DashboardSidebar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <Route exact={exact} path={path} component={component} />
      </>
    );
  }
  return <Redirect to="/signin-admin"/>
}

