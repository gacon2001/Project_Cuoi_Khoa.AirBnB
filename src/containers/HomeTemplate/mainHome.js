import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './Home/Footer'
import NavbarHome from './Home/NavbarHome'

export default function HomeTemplate({exact, path, component}) {
  
  return (
    <div>
      {path !== "/" && <NavbarHome/>}
      <Route exact={exact} path={path} component={component} />
    </div>
  )
}
