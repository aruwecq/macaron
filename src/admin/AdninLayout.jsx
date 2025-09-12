import React from 'react'
import Header from './widgets/Header/Header'
import { Outlet } from 'react-router-dom'
function AdninLayout() {
  return (
    <div>
     <Outlet/>
    </div>
  )
}

export default AdninLayout
