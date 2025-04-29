import React, { useContext } from 'react'
import Navbar from './Navbar'
import SideMenu from './SideMenu'
import { UserContext } from '../../context/userContext'

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex flex-grow w-full">
          {/* Sidebar (Fixed Width) */}
          <div className="w-64 hidden md:block">
            <SideMenu activeMenu={activeMenu} />
          </div>

          {/* Main Content (Expands Properly) */}
          <div className="flex-grow px-6">
            <div className="w-full">{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardLayout
