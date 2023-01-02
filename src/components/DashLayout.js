import React from 'react'
import {Outlet} from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import MainNav from './navs/MainNav'

const DashLayout = () => {
  return (
    <React.Fragment>
       <DashHeader />
       <MainNav />
        <div className="dash-container">
            <Outlet />
        </div>
        <DashFooter />
    </React.Fragment>
  )
}

export default DashLayout