"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { useAuthContext } from "@/app/context/AuthContext";
import SignupForm from "../components/signup/SignupForm";

export default function SinIn() {
  const { createUser } = useAuthContext();
  
  const router = useRouter()

  const [values, setValues] = useState({
    email: "",
    password: "",
    displayName: ""

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
      createUser(values);
      router.push('/store/Todos')
      /* console.log("Datos enviados", values); */
    }
    catch (error) {
      console.error("Error al crear usuario:", error.message);
    }
  };

  return (
    <>
      <SignupForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </>
  );
}


