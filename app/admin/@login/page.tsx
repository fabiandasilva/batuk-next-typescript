"use client";
import React, { useState } from "react";
import AdminLogIn from "@/app/components/adminLogIn/AdminLogIn";
import { useAuthContext } from "@/app/context/AuthContext";
import { Notifications } from "@/app/components";
import { toast } from "react-toastify";

export default function LogIn() {
  const { loginUser } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      loginUser(values);
      /* console.log("Datos enviados", values); */
    } catch (error) {
      toast.error("No tienes acceso al admin.");
    }


    e.preventDefault();
    loginUser(values);
    /* console.log("Datos enviados", values); */
  };

  return (
    <>
      <AdminLogIn
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
      <Notifications />
    </>
  );
}
