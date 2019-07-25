import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Public = ({ component: Component, ...rest }) => {

  const userLogged = localStorage.getItem('token')

  if ( userLogged ) {
    return <Redirect to="/" />
  }
  return <Route {...rest} component={Component} />
  
}

export default Public
