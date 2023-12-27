"use client"
import React from "react"
import AdminNavBar from "../components/adminNavbar/AdminNavbar"
import { useAuthContext } from "../context/AuthContext"
import { Notifications } from "../components"



const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext() 

  const tokenAccess = "PQXtc7u3wlbo3X0pLOUYKMTF1ro1"

  console.log(user?.uid === tokenAccess)

  

  return (
    <div>
      <AdminNavBar />      
      {user?.logged && user?.uid === tokenAccess ? children : login}
    </div>
  )
}

export default AdminLayout