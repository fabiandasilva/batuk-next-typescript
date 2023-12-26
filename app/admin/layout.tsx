"use client"
import React from "react"
import AdminNavBar from "../components/adminNavbar/AdminNavbar"
import { useAuthContext } from "../context/AuthContext"



const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext()
  /* console.log(user.uid) */
  /*   const uid = "S9YrIQmTJxTYnllsDun69R0zZ3g1" */

  return (
    <div>
      <AdminNavBar />
      {user?.logged ? children : login}
    </div>
  )
}

export default AdminLayout