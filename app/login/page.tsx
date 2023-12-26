"use client";
import React, { useState } from "react";
import { useAuthContext } from "@/app/context/AuthContext";
import LogInForm from "../components/logIn/LogInForm";
import { useRouter } from 'next/navigation'

export default function Login() {
  const { loginUser } = useAuthContext();

  const router = useRouter()


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
      router.push('/store/Todos')
      /* console.log("Datos enviados", values); */
    }
    catch (error) {
      console.error("Error al crear usuario:", error.message);
    }
  };

  return (
    <>
      <LogInForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
      />
    </>
  );
}


