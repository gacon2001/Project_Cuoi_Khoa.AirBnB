import React from 'react'
import { Route } from 'react-router-dom'

export default function HomeTemplate({exact, path, component}) {
  return (
    <div>
      <Route exact={exact} path={path} component={component} />
    </div>
  )
}
