
import React, { Suspense } from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import PageNotFound from './containers/PageNotFound';
import './App.css';
import { renderRoutesAdmin, renderRoutesHome } from 'routes';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<div> Loading....</div>}>
      <BrowserRouter>
      <Switch>
        {renderRoutesAdmin()}
        {renderRoutesHome()}
        <Route path="/" component={PageNotFound}/>
      </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;


