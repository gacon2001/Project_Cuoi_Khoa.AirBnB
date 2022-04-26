import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import "./App.css";
import { renderRoutesAdmin, renderRoutesHome } from "routes";
import { Switch } from "react-router-dom";
import SignInAd from "containers/AdminTemplate/SignInAd";

function App() {
  return (
    <Suspense fallback={<div> Loading....</div>}>
      <BrowserRouter>
        <Switch>
          {/* mainAdmin -> nếu signin vào thì mới render Dashboard và những Route ta muốn -> còn ko thì Redirect qua signin-admin -> thì chạy qua App.js chạy từ đầu Switch duyệt xuống thì phải có cái Route path="/signin-admin" => bắt gặp và đi vào trang SignInAd */}
          <Route path="/signin-admin" component={SignInAd} />
          {renderRoutesAdmin()}
          {renderRoutesHome()}
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
