import React from 'react'
import Header from '../header/Header'
import Footer1 from '../footer/Footer1'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer1/>
    </div>
  )
}

export default Layout
