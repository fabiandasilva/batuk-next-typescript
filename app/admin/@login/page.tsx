"use client";
import React, { useState } from "react";
import AdminLogIn from "@/app/components/adminLogIn/AdminLogIn";
import { useAuthContext } from "@/app/context/AuthContext";

export default function Example() {
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
    e.preventDefault();
    loginUser(values);
    console.log("Datos enviados", values);
  };

  return (
    <>
      <AdminLogIn
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </>
  );
}
