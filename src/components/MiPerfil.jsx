import React from "react";
import { useAuth } from "../context/AuthContext";

export default function MiPerfil() {
    const { User } = useAuth();
    console.log(User);
    return <div>{User.email}</div>;
}
