"use client";
import { auth } from "@/firebase/config";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

type AuthContextProps = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthContextProps) => {
    type User = {
        logged: boolean;
        email: string | null;
        uid: string | null;
    } | null;

    const [user, setUser] = useState<User>({
        logged: false,
        email: null,
        uid: null,
    });

    type UserCredentials = {
        email: string;
        password: string;
    };

    const createUser = async (values: {
        email: string;
        password: string;
        displayName?: string;
    }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );

            await updateProfile(auth.currentUser, {
                displayName: values.displayName || null,
                photoURL: null,
            });

            console.log(userCredential);
        } catch (error) {
            console.error("Error al crear usuario:", error.message);
        }
    };

    const loginUser = async (values: UserCredentials) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            console.log(userCredential);
        } catch (error) {
            console.error(
                "Error al ingresar con un usuario registrado:",
                error.message
            );
        }
    };

    const logoutUser = async () => {
        signOut(auth);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid,
                });
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null,
                });
            }
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                createUser,
                loginUser,
                logoutUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
